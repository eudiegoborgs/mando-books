import express from "express";
import cors from "cors";
import * as bodyParser from "body-parser";
import HealthcheckController from "../../application/controllers/healthcheck";
import UserController from "../../application/controllers/users";
import BookController from "../../application/controllers/books";

const healthcheck = new HealthcheckController();
const user = new UserController();
const book = new BookController();

const api = express();

api.use(cors({ origin: true }));
api.use(bodyParser.json());

const router = express.Router();
api.use("/", router);
router.get("/healthcheck", healthcheck.ready);
router.post("/users/auth", user.auth);
router.post("/users/register", user.create);
router.get("/books", book.list);
router.get("/books/:id/show", book.show);
router.patch("/books/:id/purchase", book.purchase);
export default api;
