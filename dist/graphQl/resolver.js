"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryResolver = void 0;
const connection_1 = require("../migrations/connection");
exports.queryResolver = {
    async registerEmail({ email }, context) {
        const db = new connection_1.DbOperations();
        const registeredUser = await db.registerEmail(email);
        return registeredUser;
    },
    async allRegisteredEmail() {
        const db = new connection_1.DbOperations();
        const allEmails = await db.allRegisteredEmail();
        return allEmails;
    }
};
