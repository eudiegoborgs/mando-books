import UserEntity from "../entities/user.entity"
import UserRepository from '../repositories/user.repository'

export default class UserService {
    constructor(private readonly repo: UserRepository) {}

    auth(email: string, password: string): UserEntity
    {
        const user = this.repo.findByEmail(email)
        if (!user) {
            throw {code: 404, message: "Usuário não encontrado."}
        }
        if (user.password !== password) {
            throw {code: 401, message: "Senha invalida."}
        }

        return user
    }

    register(data: UserEntity): UserEntity
    {
        const userWithSameEmail = this.repo.findByEmail(data.email)
        if (userWithSameEmail) {
            throw {code: 403, message: "Já existe outro cadastro com esse e-mail."}
        }
        this.repo.create(data)
        return this.repo.findByEmail(data.email)
    }
}
