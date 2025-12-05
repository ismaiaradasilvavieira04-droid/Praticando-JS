function nota() {

let nota = (prompt("Digite sua nota:"));

if (nota > 0 && nota <=4) {
console.log("A nota "+ nota + " é: Nota baixa");

} else if (nota > 5 && nota <=7) {
   console.log("A nota  "+ nota + " é: Nota baixa");

} else if (nota > 8 && nota <=10) {
   console.log("A nota "+ nota + " é: Nota alta");

} else {
    console.log("Nota invalida.");
}
 }