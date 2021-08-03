import request from 'supertest'
import sinon from 'sinon'
import BookRepository from "../../src/infrastructure/repositories/local-memory/book.repository"
import api from "../../src/infrastructure/entrypoint/api"

const sandbox = sinon.createSandbox()

let id = 0

const bookSample = {
  id: 3030,
  title: "The Testing Book",
  amount: 101010,
  author: "Diego Borges",
  description :  "This is a test",
  image: "image",
}


describe('Test list books', () => {
  afterEach(() => {
    sandbox.restore();
  })

  it('Recovery empty list', async () => {
    const response = await request(api)
      .get('/books')

    expect(response.status).toEqual(200)
    expect(response.body).toEqual([])
  })

  it('Recovery books list', async () => {
    sandbox
      .stub(BookRepository.prototype, "getAll")
      .callsFake(
        () => {
          return [bookSample];
        }
      );
    const response = await request(api)
      .get('/books')

    expect(response.status).toEqual(200)
    expect(response.body).toEqual([bookSample])
  })
})