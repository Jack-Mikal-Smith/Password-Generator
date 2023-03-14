// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create character arrays to pull from

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write generate password function
  // Create and empty array to store character sets
  // Prompt user to input password length; make sure input is between 8-128 characters

// Create confirm prompts for each character set and assign them as a variable

// Make sure users select at least one character set

// Add selected character sets to array of possible characters

// For the inputted password length, pick a random character from possible characters array 

// Display randomly generated password

