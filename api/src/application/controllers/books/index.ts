import BookService from "../../../domain/services/book.service";
import BookRepository from "../../../infrastructure/repositories/local-memory/book.repository";

export default class BookController {
    list(req, res) {
        const service = new BookService(new BookRepository());
        res.json(service.list());
    }

    show(req, res) {
        const {id} = req.params;
        const service = new BookService(new BookRepository());
        res.json(service.get(parseInt(id)));
    }

    purchase(req, res) {
        const {id} = req.params;
        const service = new BookService(new BookRepository());
        res.json(service.createPurchase(parseInt(id)));
    }
}
