/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 

Sommiamo i due numeri 

Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 

Dichiariamo chi ha vinto.
*/



//l'utente sceglie se pari o dispari e confutiamo che abbia scelto correttamente
var pariOdispari = prompt('scegli pari o dispari').toUpperCase();

var giusto = false;

for (let i = 0; i < giusto == false; i++) {

    if(pariOdispari == 'PARI' || pariOdispari == 'DISPARI') {
        giusto = true
        break
    } else {
        var pariOdispari = prompt('devi scegliere pari o dispari');
    }
}



//l'utente sceglie un numero
var numeroUser = prompt('scegli un numero da 1 a 5');

for (let i = 1; i < giusto == false; i++) {

    if(numeroUser >= 1 && numeroUser <= 5) {
        giusto = true
        break
    } else {
        var numeroUser = prompt('devi scegli un numero da 1 a 5');
    }
}

let utente = Number(numeroUser);



//il computer sceglie un numero
function random() {
    let numeroCPU = Math.round(Math.random()*4 + 1);

    let CPU = Number(numeroCPU);

    return CPU;
}

const computer = random();



//sommiamo i due numeri
let somma = utente + computer;

//console.log(somma);



//stabiliamo se la somma è pari o dispari
function risultato() {
    let ritorno;

    if (somma % 2 == 0) {
        ritorno = 'PARI';
        
    } else {
        ritorno = 'DISPARI';
    }


    return ritorno
}


const fine = risultato();

//console.log(fine)


if (fine == pariOdispari ) {
    alert('hai vinto')
} else {
    alert('hai perso')
}


/*
if (fine == 'PARI' ) {
    alert('hai vinto')
} else {
    alert('hai perso')
}
*/