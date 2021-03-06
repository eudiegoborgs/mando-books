import BookEntity from "../entities/book.entity"

export default interface BookRepositoryInterface {
  getAll(): BookEntity[];
  findById(id: number): BookEntity;
  create(book: BookEntity): number;
  update(id:number, book: BookEntity): boolean;
}
