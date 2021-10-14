const numeroRandomUser = Math.floor(Math.random() * 6) + 1 //Numero randomico dell'utente

const numeroRandomComputer = Math.floor(Math.random() * 6) + 1 //Numero randomico del computer

const body = document.querySelector("body") //selezione il body


body.insertAdjacentHTML('beforeend', `<div>Numero Utente: ${numeroRandomUser}</div>`) //creo nel body un div che conterrà il numero randomico dell'utente
body.insertAdjacentHTML('beforeend', `<div>Numero Computer: ${numeroRandomComputer}</div>`)  //creo nel body un div che conterrà il numero randomico del computer

//dichiaro chi ha vinto tra determinando il valore più alto 

if(numeroRandomUser > numeroRandomComputer ) {
     body.insertAdjacentElement('beforeend', `<div>Complimenti hai vinto tu</div>`) 
     console.log("vinto")
}

if (numeroRandomUser < numeroRandomComputer) {
     // body.insertAdjacentElement('beforeend', `<div>Mi dispiace ha vinto il PC</div>` )
     console.log("perso")
}

else if (numeroRandomUser == numeroRandomComputer) {
     // body.insertAdjacentElement('beforeend', `<div>Pareggio</div>` )
     console.log("pareggio")
}



















