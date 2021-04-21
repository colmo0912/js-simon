
// creo delle variabili e scrivo un ciclo while per generare 5 numeri casuali e li inserisco dentro un array.


var numeriRandom = [];
var numeriUtente = [];

while (numeriRandom.length < 5) {

    var numero = Math.floor(Math.random() * 50) + 1;

    if(numeriRandom.indexOf(numero) === -1){

        numeriRandom.push(numero)
    }
}

//inserisco dentro un alert i 5 numeri generati

alert("Ciao! i 5 numeri generati dal PC sono: " + numeriRandom)




