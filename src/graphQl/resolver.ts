import { v4 as uuid } from 'uuid';
import { getRepository } from "typeorm";
import { DbOperations } from '../migrations/connection';
import { Email } from '../entity/User';

export const queryResolver = {
    async registerEmail({ email }: {
        email: string
    }, context: any) {
        return{
            id:uuid(),
            email:email
        };
    },

    async allRegisteredEmail() {
        return [{
            id:uuid(),
            email:"arbazqureshi@gmail.com"
        }];
    }
}