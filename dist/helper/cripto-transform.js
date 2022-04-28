"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPasswordTransform = void 0;
const bcrypt_1 = require("bcrypt");
exports.hashPasswordTransform = {
    to(password) {
        return (0, bcrypt_1.hashSync)(password, 10);
    },
    from(hash) {
        return hash;
    },
};
//# sourceMappingURL=cripto-transform.js.map