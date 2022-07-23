// Assignment code here
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var specialCharacters = []

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);

// Write password to the #password input


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() 

prompt ("How many characters would you like in your password?");
if (passwordLength < 8) stop function. 
if (passwordLength > 128) stop function 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
