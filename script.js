// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create character arrays to pull from
var upperCase = ["A", "B", "C", "D", "E", "F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["1","2","3","4","5","6","7","8","9"];
var special = ["!","@","#","$","%","^","&","*","/","-"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write generate password function
function generatePassword() {
  // Create and empty array to store character sets
  var possibleChoices = [];
  // Prompt user to input password length; make sure input is between 8-128 characters
  var passwordLength = prompt("How many characters do you want your password to be?");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your password can only be between 8 and 128 characters.");
    return;
  }

  // Create confirm prompts for each character set and assign them as a variable
  var wantsUpperCase = confirm("Do you want your password to include uppercase letters?");
  var wantsLowerCase = confirm("Do you want your password to include lowercase letters?");
  var wantsSpecial = confirm("Do you want your password to include special characters?");
  var wantsNumbers = confirm("Do you want your password to include numbers?");

  // Make sure users select at least one character set
  if (!wantsUpperCase && !wantsLowerCase && !wantsNumbers && !wantsSpecial) {
    alert("You must select at least one character type.");
    return;
  }

  // Add selected character sets to array of possible characters
  if (wantsLowerCase) {
    possibleChoices = possibleChoices.concat(lowerCase);
  }

  if (wantsUpperCase) {
    possibleChoices = possibleChoices.concat(upperCase);
  }

  if (wantsNumbers) {
    possibleChoices = possibleChoices.concat(numbers);
  }

  if (wantsSpecial) {
    possibleChoices = possibleChoices.concat(special);
  }

  // For the inputted password length, pick a random character from possible characters array 
  var password = "";
  for (i = 0; i < passwordLength; i++) {
    var randomChar = possibleChoices[Math.floor(Math.random()*possibleChoices.length)];
    password += randomChar;
  }

  // Display randomly generated password
  return password;
}
  
  





