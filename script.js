// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[','~','-', '_', '.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


// Function to prompt user for password options
function getPasswordOptions() {
    //Prompts user for password length
    let passwordLength = parseInt(prompt('Enter the desired password length between 10 and 64 (included), please:'));

    // These lines checks if the entered password length is not a number or is less than 10 or greater than 64 characters
    if (isNaN(passwordLength) === true || passwordLength < 10 || passwordLength > 64) {
        alert('Password length must be a NUMBER between 10 and 64 (included). Please try again.');
        return;
    } else {        
        // Continue once password length requirements are met
        confirmSpecialChar = confirm('Will this contain special characters?');
        confirmNumber = confirm('Will this contain numeric characters?');
        confirmLowerCase = confirm('Will this contain lowercase characters?');
        confirmUpperCase = confirm('Will this contain uppercase characters?');
    };

    // If user input is invalid check
    if (!confirmSpecialChar && !confirmNumber && !confirmLowerCase && !confirmUpperCase) {
        alert('You must select at least one option. Please try again.');
        return;
    }

    //Create an object to hold the user's choices from the input
    let userInput = {
        passwordLength: passwordLength,
        confirmSpecialChar: confirmSpecialChar,
        confirmNumber: confirmNumber,
        confirmLowerCase: confirmLowerCase,
        confirmUpperCase: confirmUpperCase
    };
    console.log(userInput);
    return userInput;
};

// Function for getting a random element from an array
function getRandom(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
};


// Function to generate password with user input
function generatePassword() {
    //stored the function in a variable
    let options = getPasswordOptions();

    // Empty string to store the generated password
    let password ='';

    // Empty string to store the types of characters chosen by user
    let passwordTypes = '';

    // Empty array to store the characters included in the password
    let includedCharacters = [];
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
  }
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);