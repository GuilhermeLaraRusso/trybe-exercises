import { User, Address } from "./typeAssertion";

export function stringToJson<T, U>(str: string, id: U): T & { id: U } {
  const result = JSON.parse(str);
  result.id = id;
  return result;
};

const user = stringToJson<User, number>('{"name":"André Soares","email":"andre@trybe.com","password":"senha_secreta"}', Date.now());

const address = stringToJson<Address, string>('{"street":"Rua Tamarindo","number":1}', '#01')

user.id;
address.id;