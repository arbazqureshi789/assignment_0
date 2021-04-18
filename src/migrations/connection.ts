import { getRepository } from "typeorm";
import { validate } from "class-validator";
import { v4 as uuid } from 'uuid';
import { Email } from "../entity/User";

export class DbOperations {

    private emailRepository = getRepository(Email);

    async registerEmail(email: string){
        const checkEmail = await this.isEmailExist(email);
        if(!checkEmail){
            const newEmail = this.emailRepository.create({
                id:uuid(),
                email:email
            })

            const errors = await validate(newEmail);
            if(errors.length > 0){
                throw new Error(`Invalid Email`);
            }else {
                const registerUser = await this.emailRepository.save(newEmail);
                return registerUser;
            }
        }else{
            throw new Error(`${email} already exist`);
        }
    }

    private isEmailExist(email: string) {
        const count = this.emailRepository.count({ where: { email: email } });
        return count;
    }

    allRegisteredEmail() {
        const user = this.emailRepository.find();
        return user;
    }

}