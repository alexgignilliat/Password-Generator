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

function generatePassword(lower, upper, number, special, length){
    var checkArr = []
    if (length > 128 || length < 8){
        alert("Password length must be between 8 and 128 characters.")
    }

    if (lower === false && upper === false && number === false && special === false){
        alert("Must select at least one character type to generate your password.")
    }
    
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
        checkArr.push(getRandomSpecial())
        for(i = 0; i < length; i++){
            checkArr.push(getRandomSpecial())
        }
    };

     var generatedPass = "";

     for(i = 0; i < length; i++){
        generatedPass += checkArr[Math.floor(Math.random() * checkArr.length)] //random number between 0-3 in an index
     }
     return generatedPass
}



// function generatePassword(lower, upper, number, special, length) {
//     var generatedPass = "";
//     var checkboxes = lower + upper + number + special;
// // console.log("checkboxes: " + checkboxes)
//     var checkArray = [{ lower }, { upper }, { number }, { special }].filter(item => Object.values(item)[0]);
// // console.log("typesArray: " + typesArray);
// //Passord length check
//     if (length < 8 || length > 128) {
//         alert("You must select a length between 8 - 128.")
//         return '';
//     }
// //At least one checkbox must be selected to generate password
//     if (checkboxes === 0) {
//         alert("You must select at least one character type.")
//         return '';
//     }
//     // for (var i = 0; i < length; i+= checkboxes) {
//     //     checkArray.forEach(type => {
//     //         var funcName = Object.keys(type)[0];
//     //         console.log('functname:' + funcName)
//     //         generatedPass += randomize[funcName]();
            
//     //     });
//     //     }
//     var finalPassword = generatedPass.slice(0, length);
//     return finalPassword;
// }



//Function for copying to clipboard
function copy() {
    var textarea = document.getElementById("result");
    textarea.select();
    document.execCommand("copy"); 
}


