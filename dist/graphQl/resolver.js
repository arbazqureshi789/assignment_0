"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryResolver = void 0;
const connection_1 = require("../migrations/connection");
exports.queryResolver = {
    async register({ email }, context) {
        const db = new connection_1.DbOperations();
    },
    async allRegisteredEmail() {
    }
};
