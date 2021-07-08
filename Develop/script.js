// Assignment code here
// start of my code
var generatePassword = function() {
  // ASCII Char Code Arrays
  var upperCase = arrayMinToMax(65, 90);
  var lowerCase = arrayMinToMax(97, 122);
  // does this need to be .concat or does + work?
  var specialChar = arrayMinToMax((33, 47) + (58, 63) + (91, 96) + (123, 126));
  var numChar = arrayMinToMax(48, 57);
  var combinedArray = [];

  // start password length
  // ask user to select a password character length between 8 and 128 characters
  var promptLength = window.prompt("Choose a password length between 8 and 128 characters.");

  // if input is blank, null, or less than 8 or greater than 128 repeat prompt
  while (promptLength === "" || promptLength === null || promptLength < 8 || promptLength > 128) {
    window.alert("Invalid selection, pick select a password length between 8 and 128 characters!");
    promptLength = prompt("Choose a password length between 8 and 128 characters.");
  }
  //take input of promptLength and turn it into an integer
  promptLength = parseInt(promptLength);
  // promptLength results
  console.log(promptLength);
  // end password length

  // start lowercase
  var promptLowerCase = window.confirm("Do you want lowercase letters in the password?");
  // if true, include lowerCase array
  if (promptLowerCase) {
    combinedArray = combinedArray.concat(lowerCase);
  }
  // end lowercase

  // start uppercase
  var promptUpperCase = window.confirm("Do you want uppercase letters in the password?");
  // if true, include upperCase array
  if (promptUpperCase) {
    combinedArray = combinedArray.concat(upperCase);
  }
  // end uppercase

  // start special char
  var promptSpecialChar = window.confirm("Do you want special characters in the password?");
  // if true, include specialChar array
  if (promptSpecialChar) {
    combinedArray = combinedArray.concat(specialChar);
  }
  // end special char

  // start number
  var promptNumChar = window.confirm("Do you want numbers in the password?");
  // if true, include numChar array
  if (promptNumChar) {
    combinedArray = combinedArray.concat(numChar);
  }
  // end number

  // blank variable for password to write to
  var userPassword = "";

  // place code to convert ASCII char here once you figure it out
  //

  // for loop iterates until i is no longer less that promptLength
  for (var i = 0; i < promptLength; i++) {
    // iterates until userPassword at least equals combinedArray
    userPassword += combinedArray[Math.floor(Math.random() * combinedArray.length)];
  }
  
  return userPassword;
}
// end of my code

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
