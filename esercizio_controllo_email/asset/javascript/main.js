
const caratteri = 'abcdefghijklmnopqrstuvwxyz1234567890';
let stringa = "";
const emailverificate = [] ;
const emailDaVerificare = document.getElementById("email");
let risposta = document.getElementById("risposta");

for(let i=0; i<5 ; i++){
     stringa = "";

     for(let i=0; i<15; i++){    
     stringa += caratteri[Math.floor(Math.random() * caratteri.length)];   
     }

     emailverificate.push(stringa+"@gmail.com");
}

//console.log(emailverificate);


document.getElementById("manda_email").addEventListener("click", verifichiamo)

function verifichiamo() {
     
     if  (emailverificate.includes(emailDaVerificare.value))
     risposta.insertAdjacentHTML('afterbegin', `<div>LA TUA EMAIL ${emailDaVerificare.value} è VALIDA</div> `);
     
     else 
     risposta.insertAdjacentHTML('afterbegin', `<div>Email non valida. <br> Inserire una delle seguenti email disponibili: <br> ${emailverificate} </div>`);
}











