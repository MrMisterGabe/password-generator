// Assignment code here

// ASCII Char Code Arrays
var upperCase = arrayMinToMax(65, 90);
var lowerCase = arrayMinToMax(97, 122);
var specialChar = arrayMinToMax((33, 47) + (58, 63) + (91, 96) + (123, 126));
var numChar = arrayMinToMax(48, 57);

var passwordLength = function () {
  // ask user to select a password character length between 8 and 128 characters
  var promptLength = window.prompt("Choose a password length between 8 and 128 characters.");
  // if input is blank or null, recursively call passwordLength function
  if (promptLength === "" || promptLength === null) {
    window.alert("Invalid selection, please try again!");
    return passwordLength();
  }
  //take input of promptLength and turn it into an integer
  promptLength = parseInt(promptLength);

  //if input is less than 8 or greater than 128, recursively call promptLength function
  if (promptLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You need to select a length between 8 and 128 characters! Please try again.");
    return passwordLength();
  } else {
    console.log(promptLength);
  }
}
var passwordCriteria = function() {
}

// cycle through arrays to generate password
function arrayMinToMax(min, max) {
  for (var i = min; i <= max; i++) {
    array.push(i)
  }
  return array
}

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
