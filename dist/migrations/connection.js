"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbOperations = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const uuid_1 = require("uuid");
const User_1 = require("../entity/User");
class DbOperations {
    constructor() {
        this.emailRepository = typeorm_1.getRepository(User_1.Email);
    }
    async registerEmail(email) {
        const checkEmail = await this.isEmailExist(email);
        if (!checkEmail) {
            const newEmail = this.emailRepository.create({
                id: uuid_1.v4(),
                email: email
            });
            const errors = await class_validator_1.validate(newEmail);
            if (errors.length > 0) {
                throw new Error(`Invalid Email`);
            }
            else {
                const registerUser = await this.emailRepository.save(newEmail);
                return registerUser;
            }
        }
        else {
            throw new Error(`${email} already exist`);
        }
    }
    isEmailExist(email) {
        const count = this.emailRepository.count({ where: { email: email } });
        return count;
    }
    allRegisteredEmail() {
        const user = this.emailRepository.find();
        return user;
    }
}
exports.DbOperations = DbOperations;
