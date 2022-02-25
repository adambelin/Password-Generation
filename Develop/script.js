// Assignment code here

// 
const lowerCharset = "abcdefghijklmnopqrstuvwxyz"
const upperCharset = lowerCharset.toUpperCase()
const specialCharset = "~!@#$%^&*()_+?><"
const numberCharset = "1234567890"

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

  if (!specialChars && !numericChars && !lowercaseLetter && !uppercaseLetter){
    alert('please enter one or more of the values')
    return;
  }
  
    console.log (length);

  let password = ""
  let charset = ""
  if (specialChars){
    charset += specialCharset
  }
  if (numericChars){
    charset += numberCharset
  }
  if (lowercaseLetter){
    charset += lowerCharset
  }
  if (uppercaseLetter){
    charset += upperCharset
  }

  for (let n = 0; n < length; n++){
    let index = Math.floor(Math.random() * charset.length);
    password += charset.charAt(index)
  }

  return password;
}

// if (specialCharset){
//   let passwordIndex = Math.floor(Math.random() * password.length);
//   let specialCharsIndex = Math.floor(Math.random() * specialCharset.length);
//   password = password.split("")
//   password [passwordIndex = specialCharset.charAt(index.specialChars)]
//   password = password.join()
// }

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
