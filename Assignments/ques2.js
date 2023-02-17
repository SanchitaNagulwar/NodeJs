// Write a function that takes a string as input and returns the reverse of the string.

function reverseString(str) {

    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

const string = prompt('Enter a string');

const result = reverseString(string);
console.log(result);