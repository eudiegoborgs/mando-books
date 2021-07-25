import UserEntity from "../entities/user.entity"

export default interface UserRepositoryInterface {
    findByEmail(email: string): UserEntity
    create(user: UserEntity): void
}
