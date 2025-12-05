   function multiplico() { 
let number1 = Number(prompt("Digite o primeiro número:"));
let number2 = Number(prompt("Digite o segundo número:"));


let multiplico = number1 % number2;

if (multiplico == 0) {
    console.log(number1 + " é múltiplo de " + number2);
} else {
    console.log(number1 + " não é multiplo de " + number2);
}
 }

