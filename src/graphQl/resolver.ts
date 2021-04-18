import { v4 as uuid } from 'uuid';
import { getRepository } from "typeorm";
import { DbOperations } from '../migrations/connection';
import { Email } from '../entity/User';

export const queryResolver = {
    async register({ email }: {
        email: string
    }, context: any) {
        const db = new DbOperations();
    },

    async allRegisteredEmail() {

    }
}