const characters = [
    "A","B","C","D", "E","F","G","H",
    "I","J","K","L", "M","N","O","P", 
    "Q","R","S","T", "U","V","W","X",
    "Y","Z","a","b", "c","d","e","f",
    "g","h","i","j", "k","l","m","n",
    "o","p","q","r", "s","t","u","v",
    "w","x","y","z","0", "1", "2", "3",
    "4", "5", "6", "7","8", "9","~","`",
    "!","@","#","$","%","^","&","*","(",
    ")","_","-","+","=","{","[","}","]",
    ",","|",":",";","<",">",".","?","/"
];

let pass1 = " "
let pass2 = " "
let password1 = document.getElementById("pass1")
let password2 = document.getElementById("pass2")

function randomPasswordGenerator(){
    
for(let i=0; i<15; i++){
    let p1 = Math.floor(Math.random()*characters.length)
    let p2 = Math.floor(Math.random()*characters.length)
      pass1 += characters[p1]
      pass2 += characters[p2]
 }
 password1.textContent = pass1
 password2.textContent = pass2
}

