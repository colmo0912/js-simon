
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

alert("Ciao! i 5 numeri generati dal PC sono: " + numeriRandom + " Hai 30 secondi per memorizzarli e riscriverli!");

//inseriso un timer di 30 secondi e inserisco un for con i 5 prompt dove inserire i numeri dell'utente
setTimeout (inputNumeriUtente, 30000);

function inputNumeriUtente(){

    for(i=0 ; i<5; i++){

        var imputUtente = parseInt(prompt("Scrivi in successione i numeri che hai letto nella schermata precendente"));

        // inserisco i numeri inseriti dall'utente dentro l'array numeriUtente
        numeriUtente.push(imputUtente);
        console.log(numeriUtente)

    }
}







