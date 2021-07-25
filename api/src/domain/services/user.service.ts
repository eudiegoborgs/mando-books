import UserEntity from "../entities/user.entity"
import UserRepository from '../repositories/user.repository'

export default class UserService {
    constructor(private readonly repo: UserRepository) {}

    auth(email: string, password: string): UserEntity
    {
        const user = this.repo.findByEmail(email)
        if (!user) {
            throw new Error("User not found")
        }
        if (user.password !== password) {
            throw new Error("Unauthorized")
        }

        return user
    }

    register(data: UserEntity): UserEntity
    {
        const userWithSameEmail = this.repo.findByEmail(data.email)
        if (userWithSameEmail) {
            throw new Error("has another user with this email")
        }
        this.repo.create(data)
        return this.repo.findByEmail(data.email)
    }
}
