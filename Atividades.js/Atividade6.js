function IMC() {

let peso = (prompt("Digite seu peso:"));
let altura = (prompt("Digite sua altura / exemplo: 170."));
 
let IMC = peso / (altura * altura);
console.log(IMC)

    if (IMC < 18.5) {
        console.log("Você está abaixo do peso");
        alert("Você está abaixo do peso");

    } else if (IMC >= 18.5 && IMC <= 24.9) {
        console.log("Seu peso está normal");
        alert("Seu peso está normal");


    } else {
        console.log("você esta acima do peso.");

    }
 }