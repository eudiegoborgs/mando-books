import request from 'supertest'
import sinon from 'sinon'
import api from '../../src/infrastructure/entrypoint/api'
import UserRepository from "../../src/infrastructure/repositories/local-memory/user.repository"

const sandbox = sinon.createSandbox()

const accountSample = {
    name: 'Diego Borges',
    email: 'ferreirabdiego@gmail.com',
    password: '12345678'
}

describe('Test create account', () => {
  afterEach(() => {
    sandbox.restore()
  })

  it('Create account if not exists', async () => {
    const findByEmailMock = sandbox
      .stub(UserRepository.prototype, "findByEmail")
      .withArgs(accountSample.email)

    findByEmailMock.onCall(0).returns(null)
    findByEmailMock.onCall(1).returns({...accountSample, id: 123})

    const createMock = sandbox
      .stub(UserRepository.prototype, "create")
      .withArgs(accountSample);
    
    const response = await request(api)
      .post('/users/register')
      .send(accountSample)
      .expect(200)

    expect(createMock.callCount).toEqual(1)
    expect(findByEmailMock.callCount).toEqual(2)

    expect(response.body).toEqual({...accountSample, id: 123})
  })

  it('Create account if exists', async () => {
    const findByEmailMock = sandbox
      .stub(UserRepository.prototype, "findByEmail")
      .withArgs(accountSample.email)

    findByEmailMock.returns({...accountSample, id: 123})

    const createMock = sandbox
      .stub(UserRepository.prototype, "create")
      .withArgs(accountSample);
    
    const response = await request(api)
      .post('/users/register')
      .send(accountSample)
      .expect(403)

    expect(createMock.callCount).toEqual(0)
    expect(findByEmailMock.callCount).toEqual(1)

    expect(response.body).toEqual({
      "code": 403,
      "message": "Já existe outro cadastro com esse e-mail.",
      "status": "error"
    })
  })
})