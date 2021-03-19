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

let isLowerCase;
let isUpperCase;
let isNumberChar;
let isSpecialChar;

// Created password variable
const generatePassword = function () {
  const passwordLength = prompt("What is the length of your password");
  //console.log(passwordLength);
  const passwordLengthNumber = parseInt(passwordLength, 10);
  //console.log(passwordLengthNumber);
  // Declare a new array to contain the character
  const chosenCharArray = [];

  // Validation for length of the password
  if (passwordLengthNumber >= 8 && passwordLengthNumber <= 128) {
    isLowerCase = confirm("Does your Password includes lower characters?");
    console.log(isLowerCase);

    isUpperCase = confirm("Does your Password includes upper characters?");
    console.log(isUpperCase);

    isNumberChar = confirm("Does your Password includes numbers?");
    console.log(isNumberChar);

    isSpecialChar = confirm("Does your Password includes special characters?");
    console.log(isSpecialChar);

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
    } else {
      alert("Your password should contain characters from 8 to 128");
    }
    const optionsArray = [[lowerCaseArray], [specialChar]];
    if (isLowerCase) {
      optionsArray.push(lowerCaseArray);
    } else {
      optionsArray.push(specialChar);
    }

    for (let i = 0; i < passwordLengthNumber; i++) {
      let randomArray =
        chosenCharArray[Math.floor(Math.random() * chosenCharArray.length)];

      let randomCharacter =
        randomArray[Math.floor(Math.random() * randomArray.length)];
      console.log(randomArray);
      console.log(randomCharacter);
      passwordArray.push(randomCharacter);
    }
    console.log(passwordArray);

    return passwordArray.join("");
  }
};

// Write password to the #password input
//function writePassword() {
//const password = generatePassword();
//var passwordText = document.querySelector("#password");

//passwordText.value = password;
//}
// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
