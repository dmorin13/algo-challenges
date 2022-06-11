/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


// ITERATIVE APPROACH
//linear solution
const vowels = ["a", "e", "i", "o", "u"]

function vowelsCounter(text) {
    // Initialize counter
    let counter = 0;

    // Loop through text to test if each character is a vowel

    for (let letter of text.toLowerCase()) {
        if (vowels.includes(letter)) {
            counter++
        }
    }

    // Return number of vowels
    return counter
}

// .includes()







module.exports = vowelsCounter;
