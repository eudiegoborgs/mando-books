import BookEntity from "../../../domain/entities/book.entity";
import BookRepositoryInterface from "../../../domain/repositories/book.repository";
import LocalMemoryDataBase from "../../database/local-memory";

export default class BookRepository implements BookRepositoryInterface {
    private COLLECTION_NAME = 'books'

    getAll(): BookEntity[] {
        return LocalMemoryDataBase.getAllOnCollection(this.COLLECTION_NAME)
    }
    
    findById(id: number): BookEntity {
        const data: any = LocalMemoryDataBase.getOnCollection(this.COLLECTION_NAME, id)
        return data as BookEntity
    }

    create(book: BookEntity): number {
        return LocalMemoryDataBase.insertOnCollection(this.COLLECTION_NAME, book)
    }

    update(id: number, book: BookEntity): boolean {
        return LocalMemoryDataBase.updateOnCollection(this.COLLECTION_NAME, id, book)
    }
}
