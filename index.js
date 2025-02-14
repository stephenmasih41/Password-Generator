const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


// getting the variables

let password1 = document.getElementById('password-1')
let password2 = document.getElementById('password-2')
function passwordGenerator(){
    let password = ""
        for (let i =0; i < 15; i++){
            let random = Math.floor(Math.random() * characters.length)
            password += characters[random]
        }
    return password
}

function dom(){
    let random1 = passwordGenerator()
    let random2 = passwordGenerator()
    password1.textContent = random1
    password2.textContent = random2
}
  

 


