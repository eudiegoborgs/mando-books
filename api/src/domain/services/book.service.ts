import BookEntity from "../entities/book.entity";
import BookRepositoryInterface from "../repositories/book.repository";

export default class BookService {
    constructor(private readonly repo: BookRepositoryInterface) {}

    list(): BookEntity[]
    {
        return this.repo.getAll()
    }

    get(id: number): BookEntity
    {
        return this.repo.findById(id)
    }

    createPurchase(id: number): BookEntity
    {
        const book = this.get(id)
        if (book.amount < 1) {
            throw {code: 403, message: "Não existem livros disponiveis para emprestar."};
        }
        book.amount--;
        this.repo.update(id, book)
        return this.get(id)
    }

    create(book: BookEntity): BookEntity
    {
        const id = this.repo.create(book)
        return this.get(id)
    }
}
