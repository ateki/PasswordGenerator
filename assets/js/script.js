// TODO: Differentiate between CHAR_TYPE_SPECIAL and CHAR_TYPE_SPECIAL_IDX. ALthough can use same best split
// TODO: Create objects so dont need to pass options array out of function
// TODO: Research performance of objects....etc.
// TODO: User option validation and throw error/alert/loop until cancel or enter valid number
// TODO: Add to Git To Do list ...
// TODO: Research modules https://stackoverflow.com/questions/8752627/how-can-i-split-a-javascript-application-into-multiple-files

/*
 * --------------------------------------------------------------------------------------
 * Generates random password based on user's chosen selection criteria and password length.
 * User is asked to provide password length and types of characters for password via simple 
 * prompt boxes.
 * A random password is generated based on this criteria and finally displayed on the page.
 * 
 * Event listeners are used to  
 *  - prompt user for password criteria
 *  - perform validation on requested criteria before
 *  - randomly generating password to meet user's chosen criteria
 *  - Finally displaying password on page.
 * 
 * --------------------------------------------------------------------------------------
 */

/* CONSTANT VARS */

/* 
 * Valid password length range
 */
const MIN_PASSWORD_LENGTH = 10;
const MAX_PASSWORD_LENGTH = 64;
const PROMPT_MSG_PASSWORD_LENGTH = 'How many characters would you like your password to contain? \n (At least 10 chars but no more than 64 please.)';

/* 
 * Index Position of selection criteria array used to store user's choices...as returned by getPasswordOptions()
 * For now also using in switch to determine diff char type options...should differentiate
 */
const PASSWORD_LENGTH_IDX=0;
const CHAR_TYPE_SPECIAL_IDX = 1;
const CHAR_TYPE_NUMERICAL_IDX = 2;
const CHAR_TYPE_LOWER_IDX = 3;
const CHAR_TYPE_UPPER_IDX = 4;

/* 
 * Various prompts displayed to user whilst requesting user's password criteria. 
 */
const PROMPT_MSG_SPECIAL = 'Click OK to confirm including special characters ($@%&*, etc).';
const PROMPT_MSG_NUMERICAL = 'Click OK to confirm including numerical characters.';
const PROMPT_MSG_LOWER_CASE = 'Click OK to confirm including lowercase characters.';
const PROMPT_MSG_UPPER_CASE = 'Click OK to confirm including uppercase characters.';


/*
 *  Various error messages displayed on validating user's password criteria
 */
const ERR_MSG_PASSWORD_TOO_LONG = `Password length must be no more than ${MAX_PASSWORD_LENGTH} characters.`;
const ERR_MSG_PASSWORD_TOO_SHORT = `Password length must be at least ${MIN_PASSWORD_LENGTH} characters.`;
const ERR_MSG_NON_INTEGER_FOR_PASSWORD_LENGTH = `You have provided a non integer.  We require an integer to indicate your preferred password length.`;



/*  LIBRARY FUNCTIONS */

// TODO : float 5.5, cancel check for null?

function promptPasswordLength() {
 
    var lengthStr;
    var errLength;
    var errNonInteger;

    do {
        errLength = false;
        errNonInteger = false;

        lengthStr = prompt(PROMPT_MSG_PASSWORD_LENGTH);
        console.log(`promptPasswordLength has length as ${length}`);

        if (lengthStr == null) {
            //TODO  User selected cancel but need to throw error or check in calling code
            break;
        }

        length = parseInt(lengthStr);   // TODO: if give say 5.5 will round to 5?

        console.log(`lengthStr = ${lengthStr}`);
        console.log(`length = ${length}`);

        if (isNaN(length))  { 
            alert(ERR_MSG_NON_INTEGER_FOR_PASSWORD_LENGTH);
            errNonInteger=true;
            // expecting an integer. Please either enter an integer or cancel to terminate the Password Generator.

        } else if (length < MIN_PASSWORD_LENGTH) {
            alert(ERR_MSG_PASSWORD_TOO_SHORT);
            // wrong password length chosen. Please either select a length between 10 and 64 or cancel to terminate the Password Generator.
            errLength = true;

        } else if (length > MAX_PASSWORD_LENGTH) {
            alert(ERR_MSG_PASSWORD_TOO_LONG);
            errLength = true;

        }

    } while (errLength || errNonInteger);

    return length;
}





/**
 * Function displays confirm message prompting user to specify whether the given charType chars have to be included in the password.
 * 
 * @param {*} charType 
 * @returns Boolean of true if user selected OK to confirm charTypes were to be included in password, else false is returned.
 * If unknown charType returns false.   TODO: Change to throw error
 */
function confirmCharType(charType) {

    var msg = '';
    var includeCharType;

    switch(charType) {
        case CHAR_TYPE_LOWER_IDX:  
            msg = PROMPT_MSG_LOWER_CASE; 
            break;
        case CHAR_TYPE_UPPER_IDX:  
            msg = PROMPT_MSG_UPPER_CASE; 
            break;
        case CHAR_TYPE_SPECIAL_IDX:  
            msg = PROMPT_MSG_SPECIAL; 
            break;
        case CHAR_TYPE_NUMERICAL_IDX:  
            msg = PROMPT_MSG_NUMERICAL; 
            break;
        default:
            // TODO Change to throw error
            return false;
    }

    includeCharType = confirm(msg);
    return includeCharType;    
}


// TODO: Add object PasswordGenerator so criteria stored as data members.
/**
 * Prompt user for password options, including
 *  - password length
 *  - inclusion of special chars, numerical chars, lower case chars, upper case chars
 * 
 * Validation
 * 
 * @returns array of 5 attributes representing:
 *   chosen length of password followed by 4 booleans indicating whether 
 *   special chars, numerical chars, lower case chars and upper case chars have been selected as part of password criteria.
 */
function getPasswordOptions() {

    var length = promptPasswordLength();
    var includeSpecialChars = confirmCharType(CHAR_TYPE_SPECIAL_IDX);
    var includeNumerical = confirmCharType(CHAR_TYPE_NUMERICAL_IDX);
    var includeLowerCase = confirmCharType(CHAR_TYPE_LOWER_IDX);
    var includeUpperCase = confirmCharType(CHAR_TYPE_UPPER_IDX);

    
    // TODO: Ensure have at least one charType else throw ERROR or loop until selected.
    // if includeSpecialChars || includeNumerical || includeLowerCase || includeUpperCase then
    //  return
    // else
    //  throw error
    return [length, includeSpecialChars, includeNumerical, includeLowerCase , includeUpperCase];

}


// TODO Validation
/**
 * Random selects one of the elments of passed in arr Array and simply returns it.
 * 
 * @param Array (arr) of elements, from which selection will be made.
 * @return one element from arr
 */
function getRandom(arr) {

    console.log(`arr = `)
    var randomIdx;
    if (arr != null && arr.length>0) {
        randomIdx = Math.floor(Math.random() * arr.length);
    }
    return arr[randomIdx];


}


/**
 * Function to generate password with user input password criteria.
 * 
 * @returns randomly generated password based on 
 */
function generatePassword() {

    var password='';     
    var chosenCharTypes = [];   

    var optionsArray = getPasswordOptions();

    // Checking options to build up array of all the chars in the selected char types
    if (optionsArray[CHAR_TYPE_SPECIAL_IDX] ) {
        chosenCharTypes = chosenCharTypes.concat(specialCharacters);
    }
    
    if (optionsArray[CHAR_TYPE_NUMERICAL_IDX] ) {
        chosenCharTypes = chosenCharTypes.concat(numericCharacters);
    }
    
    if (optionsArray[CHAR_TYPE_LOWER_IDX] ) {
        chosenCharTypes = chosenCharTypes.concat(lowerCasedCharacters);
    }
    
    if (optionsArray[CHAR_TYPE_UPPER_IDX] ) {
        chosenCharTypes = chosenCharTypes.concat(upperCasedCharacters);
    }


    // Is this more efficient than having array access in the for loop condition?
    // Would it only access once or each time through loop to check condition?

    // Random select chars to create new password
    var passwordLength = optionsArray[PASSWORD_LENGTH_IDX];
    for (var i=0; i<passwordLength; i++) {
        password += getRandom(chosenCharTypes);

        // or is concat more performant that +=
        // How do we profile?
    }
   
    console.log(`password = ${password}`);
    return password;

}


/* User Interface components */

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');


/**
 * Write password to the #password input
 */
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}


/* Event Listeners */

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);