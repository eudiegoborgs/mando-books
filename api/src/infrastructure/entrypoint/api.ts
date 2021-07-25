import express from "express";
import cors from "cors";
import * as bodyParser from "body-parser";
import HealthcheckController from "../../application/controllers/healthcheck";
import UserController from "../../application/controllers/users";
import BookController from "../../application/controllers/books";
import ErrorHandlerMiddleware from "../../application/middleware/error-handler";

const errorHandler = (fn) => (req, res, next) => {
    try {
        fn(req, res, next)
    } catch (error) {
        ErrorHandlerMiddleware.handler(error, req, res, next);
    }
};

const healthcheck = new HealthcheckController();
const user = new UserController();
const book = new BookController();

const api = express();

api.use(cors({ origin: true }));
api.use(bodyParser.json());

const router = express.Router();
api.use("/", router);
router.get("/healthcheck", healthcheck.ready);
router.post("/users/auth", errorHandler(user.auth));
router.post("/users/register", errorHandler(user.create));
router.get("/books", errorHandler(book.list));
router.get("/books/:id/show", errorHandler(book.show));
router.patch("/books/:id/purchase", errorHandler(book.purchase));

export default api;
