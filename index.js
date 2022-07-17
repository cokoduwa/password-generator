//when you click the generate passwords button it will create two different random passwords, every time the button is clicked.
//the passwords will create randomly with numbers, symbols, and letters. 
//the passwords will be 15 characters long.


//characters to use for the password. 
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
"$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generateEl = document.getElementById("generate-pass");
let passOneEl = document.getElementById("pass-1");
let passTwoEl = document.getElementById("pass-2");
let passwordLength = 15;

//button function to generate password
function generatePass (){
    passOneEl.textContent = generateRandomPassword();
    passTwoEl.textContent = generateRandomPassword();
};

//select random characters for passwords
function getRandomCharacter(){
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar];
};

//generate random password with 15 random characters
function generateRandomPassword() {
    let randomPassword = "";
    for (let i = 0; i <passwordLength; i++){
        randomPassword += getRandomCharacter()
    }
    return randomPassword;
}


//when user clicks generated password, copy password to the clipboard.
//add a "click" event listener to generated passwords. 
//grab the password
//copy the grabbed password to the clipboard.
//alert the user that the password was copied.

function copyPassword(passwd){
    navigator.clipboard.writeText(passwd); //navigator API comes with JS
    const copyConfirmMsg = document.getElementById("copy-confirm");
    copyConfirmMsg.classList.remove("hidden");
    setTimeout(()=> {
        copyConfirmMsg.classList.add("hidden");
    }, "2000")
}

function checkForPassword (event) {
    const passwd = event.target.textContent;
    if (passwd == ""){
        return
    } else {
        copyPassword(passwd);
    }
}

passOneEl.addEventListener('click', checkForPassword);
passTwoEl.addEventListener('click', checkForPassword);