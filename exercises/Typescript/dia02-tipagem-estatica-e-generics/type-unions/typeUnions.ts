// A função abaixo pode receber tanto um número
// quanto uma string

function imprimirCPF(cpf: number | string): void {
  console.log(`Seu CPF é: ${cpf}`);
};

imprimirCPF(11111111111);

imprimirCPF('111.111.111-11');