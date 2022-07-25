// Assignment code here
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

//all of these need to be within the button being generated so that it takes place within that object and not outside of it in the window like it just did there... I think I'm starting to get this shit now. 



// removed my variables here... 


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
console.log(generateBtn); 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//my change here.
//notes: putting the prompt inside the function right away didn't work it made the window pop open.
function generatePassword() {

var CharacterCount = prompt("How many characters would you like your password to contain?");
var IncludeSpecialCharacters = confirm ("click OK to confirm including special characters.");
var IncludeNumericCharacters = confirm ("Click OK to confirm including numeric characters");
var IncludeLowercaseCharacters = confirm ("Click OK to confirm including lowercase charcters");
var IncludeUppercaseCharacters = confirm ("Click OK to confirm including uppercase characters");

}
var buttoncontrol = generateBtn.addEventListener("click", writePassword, promptconfirm);
buttoncontrol;

function generatePassword (buttoncontrol) {
buttoncontrol;
  prompt("How many characters would you like your password to contain?");
  }
  if (CharacterCount > 7, CharacterCount <129) {
    var CharacterCount = prompt("How many characters would you like your password to contain?");
    console.log("This is working? " + CharacterCount);
  }



  var promptconfirm = {
    CharacterCount: prompt("How many characters would you like your password to contain?"),
    IncludeSpecialCharacters: confirm("click OK to confirm including special characters."),
    IncludeNumericCharacters: confirm("Click OK to confirm including numeric characters"),
    IncludeLowercaseCharacters: confirm("Click OK to confirm including lowercase charcters"),
    IncludeUppercaseCharacters: confirm("Click OK to confirm including uppercase characters")
  
  }


//My change End.

//prompt ("How many characters would you like in your password?");
//if (passwordLength < 8) stop function. 
//if (passwordLength > 128) stop function 

// Add event listener to generate button


if (CharacterCount >7, CharacterCount <129) {
  console.log(CharacterCount);
  var CharacterCount = prompt("How many characters would you like your password to contain?");
}
 


generatePassword();
writePassword();
//Notes: If I put the VarCharacterCount prompt down below then it 
