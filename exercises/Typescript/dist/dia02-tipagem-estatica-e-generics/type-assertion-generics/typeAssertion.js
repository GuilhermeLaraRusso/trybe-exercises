"use strict";
// Type Assertion
Object.defineProperty(exports, "__esModule", { value: true });
// função que converte de string para json
function stringToJson(str) {
    const result = JSON.parse(str);
    return result;
}
;
// utilizando o "as" para converter de unknown para User
const user = stringToJson('{"name":"André Soares","email":"andre@trybe.com","password":"senha_secreta"}');
// Outra forma de usar o Assertion. A sintaxe é diferente mas tem o mesmo objetivo
const address = stringToJson('{"street":"Rua Tamarindo","number":1}');
user.name;
address.street;
