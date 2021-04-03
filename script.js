// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare character array in global memory
const lowerCaseArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const upperCaseArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialChar = ["!", "@", "$", "%", "&", "+"];

// Created password variable

function generatePassword() {
  let isLowerCase;
  let isUpperCase;
  let isNumberChar;
  let isSpecialChar;
  const passwordArray = [];
  const passwordLength = prompt("What is the length of your password");

  const passwordLengthNumber = parseInt(passwordLength, 10);

  // Declare a new array to contain the character
  const chosenCharArray = [];

  // Validation for length of the password
  if (passwordLengthNumber >= 8 && passwordLengthNumber <= 128) {
    isLowerCase = confirm("Does your Password includes lower characters?");
    isUpperCase = confirm("Does your Password includes upper characters?");
    isNumberChar = confirm("Does your Password includes numbers?");
    isSpecialChar = confirm("Does your Password includes special characters?");

    // Add validation function for character using chose
    if (isLowerCase) {
      chosenCharArray.push(lowerCaseArray);
    }
    if (isUpperCase) {
      chosenCharArray.push(upperCaseArray);
    }
    if (isNumberChar) {
      chosenCharArray.push(numberArray);
    }
    if (isSpecialChar) {
      chosenCharArray.push(specialChar);
    }
    if (!isLowerCase && !isUpperCase && !isNumberChar && !isSpecialChar) {
      alert("Select one type of character");
    }

    for (let i = 0; i < passwordLengthNumber; i++) {
      let randomArray =
        chosenCharArray[Math.floor(Math.random() * chosenCharArray.length)];

      let randomCharacter =
        randomArray[Math.floor(Math.random() * randomArray.length)];

      passwordArray.push(randomCharacter);
    }
    //console.log(passwordArray);
    //Create a variable to store our generated password
    const password = passwordArray.join("");

    return password;
  } else {
    alert("Your password should contain characters from 8 to 128");
  }
}

//Write password to the #password input
function writePassword() {
  const password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
