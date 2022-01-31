/*
Chiedere all’utente di inserire una parola 

Creare una funzione per capire se la parola inserita è palindroma
*/

// chiedo la parola
let text = prompt('inserisci parola palindroma');

//divido la parola in lettere single e creo un array
let split = text.split('');

//faccio leggere l'array al contrario
let reverse = split.reverse();

//trasformo il contenuto dell'array reverse in una stringa
let reverseText = reverse.join('');

//creo la condizione per definire se la parole che ho scritto all'inizio è palindroma oppure no
if(text == reverseText){
    alert('la parola è palindroma');
} else {
    alert('la parola non è palindroma');
}



/*
let split = text.split('').reverse().join('');

if(text == split){
    alert('la parola è palindroma');
} else {
    alert('la parola non è palindroma');
}
*/