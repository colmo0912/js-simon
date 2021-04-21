
// creo delle variabili e scrivo un ciclo while per generare 5 numeri casuali e 
//li inserisco dentro un array.

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

//inseriso un timer di 30 secondi e inserisco un for con i 5 prompt dove 
//inserire i numeri dell'utente
setTimeout (inputNumeriUtente, 30000);

function inputNumeriUtente(){

    var imputGiusti = [];
    var imputSbagliati = [];
    var imputUtenteDaInserire =[]

    for(i=0 ; i<5; i++){
        var imputUtente = parseInt(prompt("Scrivi i 5 numeri che hai letto nella schermata precendente"));
        // inserisco i numeri inseriti dall'utente dentro l'array numeriUtente
        numeriUtente.push(imputUtente);

        if (imputUtenteDaInserire.indexOf(imputUtente) === -1){
            imputUtenteDaInserire.push(imputUtente)

        

            if (numeriRandom.indexOf(imputUtente) === -1){
                imputSbagliati.indexOf(imputUtente)
            }else {

                imputGiusti.push(imputUtente)
            }
        }else {

            alert("i numeri non possono essere uguali, scegline un altro")
        }
    }
    
    var rispostaNumeriCorretti = document.getElementById("risultatoEsercizio");
    rispostaNumeriCorretti.innerHTML="i numeri uguali sono: " + imputGiusti + " per un totale di " + imputGiusti.length + " numeri giusti!"



}

//confronto tra gli array

// var numeroTrovato = false

// for(var j=0; j < numeriRandom.length; j++)

// var numeroRandomComparato = numeriRandom[j]

// if(numeroRandomComparato == numeriUtente[j]){
//     numeroTrovato = true;
//     console.log("il numero trovato è " + numeroTrovato)
// } if (!numeroTrovato) {

//     console.log("Non hai trovato numeri")
// }






