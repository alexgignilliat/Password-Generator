//This is where JavaScript is able to select elements in my HTML by using document.getElementByID//

const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const lowercaseEl = document.getElementById('lowercaseCheckbox');
const uppercaseEl = document.getElementById('uppercaseCheckbox');
const numberEl = document.getElementById('numberCheckbox');
const specialEl = document.getElementById('specialCheckbox');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    special: getRandomSpecial
};

generateEl.addEventListener('click', () => {
    const length = lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numberEl.checked;
    const hasSpecial = specialEl.checked;

    console.log(length, hasLower, hasUpper, hasNumber, hasSpecial);

    resultEl.innerText = generatePassword(
        hasLower,
        hasUpper,
        hasNumber,
        hasSpecial,
        length
    );

});

function copy() {
    let textarea = document.getElementById("result");
    textarea.select();
    document.execCommand("copy");
  }

function generatePassword(lower, upper, number, special, length) {
    let generatedPassword = "";

    const typesCount = lower + upper + number + special;
    console.log("typesCount: " + typesCount)

    const typesArray = [{lower}, {upper}, {number}, {special}].filter(item => Object.values(item)[0]);
    console.log("typesArray: " + typesArray);

    if (typesCount === 0) {
        alert("You must select at least one character type.")
        return '';
    }

    if (length < 8 || length > 128) {
        alert("You must select a length between 8 - 128.")
        return '';
    }

    for (let i = 0; i < length; i+= typesCount) {
        typesArray.forEach(type => {
            const funcName = Object.keys(type)[0];
            // console.log('functname:' + funcName)
            generatedPassword += randomFunc[funcName]();
            
        });
    }
    let finalPassword = generatedPassword.slice(0, length)

    return finalPassword;

}

//These are my functions for generating random characters.//

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(getRandomLower())

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log(getRandomUpper())

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 9) + 48)
}
console.log(getRandomNumber())

function getRandomSpecial() {
    return String.fromCharCode(Math.floor(Math.random() * 14) + 33)
}
console.log(getRandomSpecial())