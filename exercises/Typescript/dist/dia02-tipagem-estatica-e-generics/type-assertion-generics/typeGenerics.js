"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringToJson = void 0;
function stringToJson(str, id) {
    const result = JSON.parse(str);
    result.id = id;
    return result;
}
exports.stringToJson = stringToJson;
;
const user = stringToJson('{"name":"André Soares","email":"andre@trybe.com","password":"senha_secreta"}', Date.now());
const address = stringToJson('{"street":"Rua Tamarindo","number":1}', '#01');
user.id;
address.id;
