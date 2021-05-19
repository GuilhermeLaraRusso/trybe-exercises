let candidato = "reprovado";

switch (candidato) {
  case "aprovado":
    console.log("Você está aprovado");
    break;

  case "lista":
    console.log("Você está na lista de espera");
    break;

  case "reprovado":
    console.log("Você está reprovado");
    break;

  default:
    console.log("não se aplica");
}