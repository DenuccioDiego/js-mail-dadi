
const chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
let string = "";
let email = [] ;


for(let i=0; i<5 ; i++){
     string = "";

     for(let i=0; i<15; i++){    
     string += chars[Math.floor(Math.random() * chars.length)];   
     }

     email.push(string+"@gmail.com");
}


console.log(email);











