import request from 'supertest'
import sinon from 'sinon'
import BookRepository from "../../src/infrastructure/repositories/local-memory/book.repository"
import api from "../../src/infrastructure/entrypoint/api"

const sandbox = sinon.createSandbox()

const bookSample = {
  title: "The Testing Book",
  amount: 101010,
  author: "Diego Borges",
  description :  "This is a test",
  image: "image",
}

describe("Test create book", () => {
  afterEach(() => {
    sandbox.restore();
  });
  it("Create new book", async () => {
    sandbox
      .stub(BookRepository.prototype, "create")
      .withArgs(bookSample)
      .returns(500);

    sandbox
      .stub(BookRepository.prototype, "findById")
      .withArgs(500)
      .returns({ ...bookSample, id: 500 });

    const response = await request(api).post("/books").send(bookSample);
    expect(response.status).toEqual(201);
    expect(response.body).toEqual({ ...bookSample, id: 500 });
  });
});
