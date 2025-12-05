function operador () { 

  let operador1 = Number(prompt("Digite o primeiro número"));
  let operador2 = Number(prompt("Digite o segundo número"));
  let operador = prompt("escolha um operador aritmético: + , - , * , /");
  let resultado;


    switch (operador) {
    case "+":
    console.log("Você selecionou a adição!");
    resultado = operador1 + operador2;
    console.log(resultado);
    break;

    

     case "*":
     console.log("Você selecionou a multiplicação");
     resultado = operador1 * operador2;
     console.log(resultado);
     break;


     case "/":
     console.log("Você selecionou a divisão");
     resultado = operador1 / operador2;
     console.log(resultado);
     break;


     default:
        console.log("Operador ínvalido!");
     break;
}

}