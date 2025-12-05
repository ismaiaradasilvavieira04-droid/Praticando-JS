function comparar() {
let numero1 = (prompt("Informe o primeiro número:"));
let numero2 = (prompt("Informe o segundo número:"));

if (numero1 > numero2) {
   console.log("O maior número é: " + numero1);
} else if (numero2 > numero1) {
   console.log("O maior número é: " + numero2);
} else {
   console.log("Os números são iguais.");
}
}