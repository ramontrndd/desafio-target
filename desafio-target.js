let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log("O valor da variável SOMA é:", SOMA);

function verificaFibonacci(num) {
  let a = 0;
  let b = 1;
  while (b < num) {
    let temp = b;
    b = a + b;
    a = temp;
  }
  if (b === num) {
    return true;
  } else {
    return false;
  }
}

const numero = parseInt(prompt("Informe um número:"));

if (verificaFibonacci(numero)) {
  console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${numero} não pertence à sequência de Fibonacci.`);
}

function inverteString(str) {
  let inverted = "";
  for (let i = str.length - 1; i >= 0; i--) {
    inverted += str[i];
  }
  return inverted;
}

const string = prompt("Informe uma string:");
console.log("String invertida:", inverteString(string));
