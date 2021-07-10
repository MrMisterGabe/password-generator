// Assignment code here
// start of my code
var generatePassword = function() {
  // ASCII Char Code Arrays
  var upperCase = arrayMinToMax(65, 90);
  var lowerCase = arrayMinToMax(97, 122);
  var specialChar = arrayMinToMax(33, 47).concat(
    arrayMinToMax(58, 63)
    ).concat(
      arrayMinToMax(91, 96)
      ).concat(
        arrayMinToMax(123, 126)
        );
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
  // end password length

  // start lowercase
  // window prompt for user to confirm if they want lowercase letters
  var promptLowerCase = window.confirm("Do you want LOWERCASE letters in the password?");
  // if true, include lowerCase array in combinedArray
  if (promptLowerCase) {
    combinedArray = combinedArray.concat(lowerCase);
  }
  // end lowercase

  // start uppercase
  // window prompt for user to confirm if they want uppercase letters
  var promptUpperCase = window.confirm("Do you want UPPERCASE letters in the password?");
  // if true, include upperCase array in combinedArray
  if (promptUpperCase) {
    combinedArray = combinedArray.concat(upperCase);
  }
  // end uppercase

  // start special char
  // window prompt for user to confirm if they want special characters
  var promptSpecialChar = window.confirm("Do you want SPECIAL characters in the password?");
  // if true, include specialChar array in combinedArray
  if (promptSpecialChar) {
    combinedArray = combinedArray.concat(specialChar);
  }
  // end special char

  // start number
  // window prompt for user to confirm if they want numbers
  var promptNumChar = window.confirm("Do you want NUMBERS in the password?");
  // if true, include numChar array in combinedArray
  if (promptNumChar) {
    combinedArray = combinedArray.concat(numChar);
  }
  // end number

  function arrayMinToMax(min, max) {
    var array = []
    for (var i = min; i <= max; i++) {
      array.push(i)
    }
    return array
  }

  // empty Array to return for loop result later.
  var convertPasswordChar = []
  // for loop to generate characterCode string equal to promptLength with combinedArray selections.
  for (var i = 0; i < promptLength; i++) {
    var characterCode = combinedArray[Math.floor(Math.random() * combinedArray.length)]
    // convert string from ASCII code to characters
    convertPasswordChar.push(String.fromCharCode(characterCode));
  }
  // return joined convertPasswordChar
  return convertPasswordChar.join('');
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
