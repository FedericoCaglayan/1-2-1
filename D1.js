/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/


/* SCRIVI QUI LA TUA RISPOSTA */// Ci sono diversi valori per le variabili, tra cui possiamo trovare:
//string: il valore di questa variabile può essere composta da una parola, come ad esempio Luca;
//number: dove la variabile è composta da numeri
//boolean: dove la variabile può essere composta da true o false;
//undefined: quando alla variabile non diamo un valore;
//null: dove la variabile non ha valore.

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/ 

/* SCRIVI QUI LA TUA RISPOSTA */ let name = 'federico' 

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/ 

/* SCRIVI QUI LA TUA RISPOSTA */ let number1 = "12" 
let number2 = "20"
let number3 ="number1+number2" 




/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/ 

/* SCRIVI QUI LA TUA RISPOSTA */ let x = 12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
name ="caglayan"
const surname = "falbo"
const surname = "bianco" 
//la console genera un errore
//come suggerisce visual studio code non si può cambiare 

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */ let number4 = 4
let number5 = (number4-"x")
control.log(number5)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */ let name1 ="john" let name2 "John" 
console.log(name1 === name2)


