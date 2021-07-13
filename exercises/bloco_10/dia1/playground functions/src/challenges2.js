// Desafio 10
function techList(array, name) {
  if (array.length === 0){
    return 'Vazio!'
  }
  let techObject = [];
  let arrayOrdenado = array.sort();
  for (let index = 0; index < array.length; index += 1){
    techObject.push({
      tech: arrayOrdenado[index],
      name: name
    })
  };
  return techObject;
}

// Desafio 11
function generatePhoneNumber(array) {
  let codigoRegional;
  let cincoNumeros;
  let quatroNumeros;
  let mf = 1;
  let m = 0;
  
  if(array.length != 11) {
    return "Array com tamanho incorreto."
  }  
  for (index = 0; index < array.length; index += 1){
    //confere se o array contém numero menor que 0 e maior que 9
    if (array[index] < 0 || array[index] > 9){
      return "não é possível gerar um número de telefone com esses valores";
    }
  }
  for (index = 0; index < array.length; index += 1){

    //Confere se existe 3 repetições do mesmo número
    for (let index2 = 0; index2 < array.length; index2 += 1){
      if(array[index] === array[index2]) {
        m += 1;
      }
      if(mf < m){
        mf = m;
      }
    }
    m = 0;
    
    if (mf >= 3){
      return "não é possível gerar um número de telefone com esses valores";
    }
  }

    codigoRegional = array[0].toString() + array[1].toString();
    cincoNumeros = array[2].toString() + array[3].toString() + array[4].toString() + array[5].toString() + array[6].toString();
    quatroNumeros = array[7].toString() + array[8].toString() + array[9].toString() + array[10].toString();
  
    return '(' + codigoRegional + ')' + ' ' + cincoNumeros + '-' + quatroNumeros
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let lineAB = lineA + lineB;
  let lineAC = lineA + lineC;
  let lineBC = lineB + lineC;

  if(lineA > lineBC || lineB > lineAC || lineC > lineAB) {
    return false;
  } else {
    return true;
  }
}

// Desafio 13
function hydrate(string) {
  let agua = 0; 
  for (let index = 0; index < string.length; index += 1){
    if (string[index] >= '0' && string[index] <= '9') {
      agua = agua + parseInt(string[index]);
    }
  }
  if (agua > 1){
    return agua + " copos de água"
  } else {
    return agua + " copo de água"
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
