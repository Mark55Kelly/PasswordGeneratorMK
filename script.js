// Assignment code here




//all of these need to be within the button being generated so that it takes place within that object and not outside of it in the window like it just did there... I think I'm starting to get this shit now. 



// removed my variables here... 


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
console.log(generateBtn); 


//my change here.
//notes: putting the prompt inside the function right away didn't work it made the window pop open.




 // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  

var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var specialCharacters = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', '{', ']', '}', ',', '<', '.', '>', '/', '?', ';', ':', '"']
var numericValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

console.log (uppercase);
console.log (lowercase);
console.log (specialCharacters);
console.log (numericValues)

console.log (lowercase[21]);
console.log (specialCharacters[10]);

var characterpool = uppercase.concat(lowercase, specialCharacters, numericValues);
console.log(characterpool);

var include
promptmessage
  var CharacterCount = prompt("How many characters would you like your password to contain?");
  var IncludeSpecialCharacters = confirm ("click OK to confirm including special characters.");
  var IncludeNumericCharacters = confirm ("Click OK to confirm including numeric characters");
  var IncludeLowercaseCharacters = confirm ("Click OK to confirm including lowercase charcters");
  var IncludeUppercaseCharacters = confirm ("Click OK to confirm including uppercase characters");
  

}

generateBtn.addEventListener("click", writePassword);


//My change End.


//prompt ("How many characters would you like in your password?");
//if (passwordLength < 8) stop function. 
//if (passwordLength > 128) stop function 

// Add event listener to generate button


generatePassword();
writePassword();
//Notes: If I put the VarCharacterCount prompt down below then it 
