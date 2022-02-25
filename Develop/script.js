// Assignment code here
function generatePassword() {
  let length = prompt ("enter length");
  length=parseInt(length)
  if (isNaN (length) || (length <8 || length >128)){
    alert('Please enter a number between 8 and 128')
    return;
  }
  let specialChars = confirm ("do you want to include a special character")
  
  let numericChars = confirm ("do you want to include any numbers?");
  
  let lowercaseLetter = confirm ("do you want to include lowercase letters?");
  
  let uppercaseLetter = confirm ("do you want to include any uppercase letters?");
  
  
  console.log (length);

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
