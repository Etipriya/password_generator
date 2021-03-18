// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare character array in global memory
lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
numericArray = ['0','1','2','3','4','5','6','7','8','9'];
specialChar = ['!','@','$','%','&','+'];

let lowerCaseArray;
let upperCaseArray;
let numericArray;
let specialChar;

// Declare a new array to contain the character
const chosenCharArray = [];
console.log (chosenCharArray);

// Password length using prompt and changing the string to number
const passwordNum = () => {
  const passwordLength = prompt(
    "How long would you want your password to be?"
  );
  console.log(passwordLength);
  const passwordLengthNum = parseInt(passwordLength,10);
  console.log(passwordLengthNum);
}
//
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
