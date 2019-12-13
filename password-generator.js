

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

