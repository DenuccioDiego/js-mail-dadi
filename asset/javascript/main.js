const numeroRandomUser = Math.floor(Math.random() * 6) + 1 ;     //Numero randomico dell'utente

const numeroRandomComputer = Math.floor(Math.random() * 6) + 1 ; //Numero randomico del computer

const body = document.querySelector("body");    //selezione il body


body.insertAdjacentHTML('beforeend', `<div>Numero Utente: ${numeroRandomUser}</div>`);        //creo nel body un div che conterrà il numero randomico dell'utente
body.insertAdjacentHTML('beforeend', `<div>Numero Computer: ${numeroRandomComputer}</div>`);  //creo nel body un div che conterrà il numero randomico del computer


//dichiaro il risultato della sfida tramite le seguenti condizioni 

if(numeroRandomUser > numeroRandomComputer) {   // si applica questa condizione nel caso il n-User è maggiore n-Pc 
     body.insertAdjacentHTML('beforeend', `<div>Complimenti hai vinto tu</div>`) ; //creazione del div 
     //console.log("vinto")
}

if (numeroRandomUser < numeroRandomComputer) {    //si applica questa condizione nel caso il n-User è minore n-Pc
     body.insertAdjacentHTML('beforeend', `<div>Mi dispiace ha vinto il Pc</div>`); //creazione del div 
     //console.log("perso")
}

else if (numeroRandomUser == numeroRandomComputer) { //si applica questa condizione nel caso il n-User è uguale n-Pc
     body.insertAdjacentHTML('beforeend', `<div>Pareggio</div>`);                   //creazione del div 
     //console.log("pareggio")
}



















