/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



// CHAINING BUILT-IN METHODS

function reverseString(text) {
    return text.split("").reverse().join("");
}

//  CHAINING BUILT-IN METHODS USING ES6

// function reverseString(text) {
//     return [...text].reverse().join('');
// }

// USING A FOR LOOP

// function reverseString(text) {
//     let result = "";
//     for (let i = text.length - 1; i >= 0; i--) {
//         result += text[i];
//     }
//     return result;
// }

// // USING A FOR..OF LOOP IN ES6

// function reverseString(text) {
//     let result = "";
//     for (let char of text) {
//         result = char + result
//     }
//     return result;
// }

// USING .REDUCE()

// function reverseString(text) {
//     return text.split("").reduce((acc, char) => char + acc);
// }

module.exports = reverseString