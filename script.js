// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare character array in global memory
lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
numberArray = ['0','1','2','3','4','5','6','7','8','9']
specialChar = ['!','@','$','%','&','+']

let LowerCase;
let UpperCase;
let NumberChar;
let SpecialChar;

// Declare a new array to contain the character
const chosenCharArray = []
//console.log (chosenCharArray);

// Password length using prompt and changing the string to number
const passwordNumber = () => {
  const passwordLength = prompt(
    "How long would you want your password to be?"
  );
  console.log(passwordLength);
  const passwordLengthNumber = parseInt(passwordLength,10);
  console.log(passwordLengthNumber);
}
// Validation for length of the password 
if(passwordLengthNumber >= 8 && passwordLengthNumber <= 128){
  const isLowerCase = confirm("Does your Password includes lower characters?");
  console.log(isLowerCase);

  const isUpperCase = confirm("Does your Password includes upper characters?");
  console.log(isUpperCase);

  const isNumberChar = confirm("Does your Password includes numbers?");
  console.log(isNumberChar);

  const isSpecialChar = confirm("Does your Password includes special characters?");
  console.log(isSpecialChar);
}else{
  alert("Your password should contain characters from 8 to 128");
}

// Add validation function for character using chose
if(isLowerCase){
  chosenCharArray.push(lowerCaseArray);
} else if (isUpperCase){
  chosenCharArray.push(upperCaseArray);
}else if (isNumberChar){
  chosenCharArray.push(numberArray);
}else if (isSpecialChar){
  chosenCharArray.push(specialChar);
}

// Created generate password variable
const generatePassword = function(){

}
function generatePassword() {
	// Create a variable to store our generated password
	var password = ''

	// Logic would go here
	...

	// Return our created password
	return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
