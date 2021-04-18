import { v4 as uuid } from 'uuid';
import { getRepository } from "typeorm";
import { DbOperations } from '../migrations/connection';
import { Email } from '../entity/User';

export const queryResolver = {
    async registerEmail({ email }: {
        email: string
    }, context: any) {

        const db = new DbOperations();
        const registeredUser = await db.registerEmail(email);
        return registeredUser;
    },

    async allRegisteredEmail() {
        const db = new DbOperations();
        const allEmails = await db.allRegisteredEmail();
        return allEmails;
    }
}