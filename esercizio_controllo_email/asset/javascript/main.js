
const caratteri = 'abcdefghijklmnopqrstuvwxyz1234567890';   // variabile di tipo str che contiene tutti gli elementi necessari per la composizione delle email
let stringa = "";  // variabile vuota ci servirà nel prossimo For per immagazzinare i caratteri 
const emailverificate = [] ; //array con le email generate 
const emailDaVerificare = document.getElementById("email"); // seleziono l'input email (il campo dove user inserisce la mail da verificare)
let risposta = document.getElementById("risposta"); // seleziono il div tramite dove sarà inserita la risposta alla verifica email

for(let i=0; i<5 ; i++){   //ciclo esterno che servirà a far girare più volte il ciclo interno. Senza questo avremmo solamente una email generata
     stringa = "";         // fondamentale richiamare la variabile stringa con un valore vuoto in modo da generare le email nella maniera corretta senza sovrapposzioni/ripetizioni varie. 
                           // praticamente useremo stringa come contenitore temporaneo per inserire l'email creata e subito dopo svuotarlo per la prossima email 

     for(let i=0; i<15; i++){    // ciclo interno che servirà alla creazione randomizzata di una email ogni incremento di i corrisponde a una carattere creato 
     stringa += caratteri[Math.floor(Math.random() * caratteri.length)];   
     //Con la funzione Math.random prendiamo un numero decimale compreso tra 0 e 1 esclusi. Poi moltiplichiamo la lunghezza(.length) della variabile caratteri. 
     //Il risultato sarà approssimato tramite la funzione Math.floor ottenendo un numero intero tra 1 e 35 (numero di caratteri presenti nella variabile caratteri)
     //Si arriva alla seguente condizione stringa += caratteri [n]  (n=numbero casuale) 
     //Quindi in questo punto la variabile caratteri diventa un Array e tramite [n] si selezione un elemento di caratteri
     // Si otterà un nuovo carattere random che verrà aggiunto alla variabile stringa 
     }

     emailverificate.push(stringa+"@gmail.com"); //aggiungiamo all'array emailverificate l'email creata nel ciclo precedente con l'aggiunta di @gmail.com
}

//seleziono il bottone convalida email e appena fai click su questo entra nella funzione verifichiamo 
document.getElementById("manda_email").addEventListener("click", verifichiamo) 

function verifichiamo() { // funzione con la quale verifico se l'email è contenuta o no nella lista di quelle verificate 
     
     if  (emailverificate.includes(emailDaVerificare.value)) //condizione in cui l'email immessa dall'utente è contenuta nell'array emailverificate
     risposta.insertAdjacentHTML('afterbegin', `<div>LA TUA EMAIL ${emailDaVerificare.value} è VALIDA</div> `); //inserisco un div dentro <div id=risposta></div> 
     
     else  //condizione in cui l'email non è contenuta e vengono proposte le email disponibili 
     risposta.insertAdjacentHTML('afterbegin', `<div>Email non valida. <br> Inserire una delle seguenti email disponibili: <br> ${emailverificate} </div>`);
}











