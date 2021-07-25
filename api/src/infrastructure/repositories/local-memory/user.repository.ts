import UserEntity from "../../../domain/entities/user.entity";
import UserRepositoryInterface from "../../../domain/repositories/user.repository";
import LocalMemoryDataBase from "../../database/local-memory";

export default class UserRepository implements UserRepositoryInterface {
    private COLLECTION_NAME = 'users'
    
    findByEmail(email: string): UserEntity {
        const data: any = LocalMemoryDataBase.getFirstOnCollectionByKey(this.COLLECTION_NAME, 'email', email)
        return data as UserEntity;
    }

    create(user: UserEntity): void {
        LocalMemoryDataBase.insertOnCollection(this.COLLECTION_NAME, user)
    }
}
