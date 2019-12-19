alert("***DISCLAIMER: THIS APPLICATION DOES NOT YET GENERATE CRYPTOGRAPHICALLY SECURE PASSWORDS.*** \n\nWhile the passwords currently generated should be fine for things like Twitter, Facebook, etc, I am not responsible for any outcome resulting from or otherwise relating to this application in any way.\n\n***For all practical purposes, until officially stated otherwise, THIS APPLICATION IS IN IT'S PRE-ALPHA PHASE.***")

//This is where JavaScript is able to select elements in my HTML by using document.getElementByID//
//Grab html element for the result textarea
var resultEl = document.getElementById('result');
//Grab html element for the length form/field
var lengthEl = document.getElementById('length');
//Grab html element for the lowercase checkbox
var lowercaseEl = document.getElementById('lowercaseCheckbox');
//Grab html element for the uppercase checkbox
var uppercaseEl = document.getElementById('uppercaseCheckbox');
//Grab html element for the number checkbox
var numberEl = document.getElementById('numberCheckbox');
//Grab html element for the special checkbox
var specialEl = document.getElementById('specialCheckbox');
//Grab html element for the generate button
var generateEl = document.getElementById('generate');
//Grab html element for the copy to clipboard feature
var clipboardEl = document.getElementById('clipboard');

var randomize = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    special: getRandomSpecial
};
/*Every character is assigned a number. Example: 97 = lowercase "a".
Using fromCharCode, any ASCII character can be retrieved.
Pretty cool alternative to typing them all out into arrays.*/
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 9) + 48);
}
function getRandomSpecial() {
    return String.fromCharCode(Math.floor(Math.random() * 14) + 33);
}
//Event listener for the generate button.
generateEl.addEventListener('click', function() {
    var length = +lengthEl.value;
    var hasLower = lowercaseEl.checked;
    var hasUpper = uppercaseEl.checked;
    var hasNumber = numberEl.checked;
    var hasSpecial = specialEl.checked;
// console.log(length, hasLower, hasUpper, hasNumber, hasSpecial);
    resultEl.innerText = generatePassword(
        hasLower,
        hasUpper,
        hasNumber,
        hasSpecial,
        length
    );
});

/*This is pretty much where the magic happens.
I've got a function that checks several things:
- Create an array
- Check if certain parameters are met before generating a password
- If something is true (checkbox clicked), push it into the array, call it's respective character's function
*/

function generatePassword(lower, upper, number, special, length){
    var checkArr = []
    if (length > 128 || length < 8){
        alert("Password length must be between 8 and 128 characters.")
        return ''
    };
    if (lower === false && upper === false && number === false && special === false){
        alert("Must select at least one character type to generate your password.")
        return ''
    };

    if (lower === true){
        for(i = 0; i < length; i++){
            checkArr.push(getRandomLower())
        }
    };

    if (upper === true){
        for(i = 0; i < length; i++){
            checkArr.push(getRandomUpper())
        }
    };
    if (number === true){
        for(i = 0; i < length; i++){
            checkArr.push(getRandomNumber())
        }
    };
    if (special === true){
        for(i = 0; i < length; i++){
            checkArr.push(getRandomSpecial())
        }
    };

     var generatedPass = "";

     for(i = 0; i < length; i++){
        generatedPass += checkArr[Math.floor(Math.random() * checkArr.length)] //random number between 0-3 in an index
     };
     return generatedPass
}

//Function for copying to clipboard
function copy() {
    var textarea = document.getElementById("result");
    textarea.select();
    document.execCommand("copy"); 
}



