"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryResolver = void 0;
const uuid_1 = require("uuid");
exports.queryResolver = {
    async registerEmail({ email }, context) {
        return {
            id: uuid_1.v4(),
            email: email
        };
    },
    async allRegisteredEmail() {
        return [{
                id: uuid_1.v4(),
                email: "arbazqureshi@gmail.com"
            }];
    }
};
