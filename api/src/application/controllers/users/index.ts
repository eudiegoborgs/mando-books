import UserService from "../../../domain/services/user.service";
import UserRepository from "../../../infrastructure/repositories/local-memory/user.repository";

export default class UserController {
    auth(req, res) {
        const {email, password} = req.body
        const service = new UserService(new UserRepository());
        const result = service.auth(email, password)
        res.json(result);
    }

    create(req, res) {
        const service = new UserService(new UserRepository());
        res.json(service.register(req.body));
    }
}
