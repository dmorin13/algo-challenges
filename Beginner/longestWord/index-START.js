/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function longestWord(text) {
    let wordArray = text.split(' ')
    let maxLength = 0
    let result = ''
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length > maxLength) {
            maxLength = wordArray[i].length
            result = wordArray[i]
        }
    }
    return result
}



// // USING .REDUCE()

// function longestWord(text) {
//     var result = text.split(' ').reduce((maxLengthWord, currentWord) => {
//         if (currentWord.length > maxLengthWord.length) {
//             return currentWord
//         } else {
//             return maxLengthWord
//         }
//     }, "")
//     return result
// }


// // USING .SORT()

// function longestWord(text) {

//     var sortedArray = text.split(' ')
//                           .sort((wordA, wordB) => wordB.length - wordA.length)

//     return sortedArray[0]
// }

function longestWord(text){
    let newText =text.split('')
    let longest= ''
    
    for(let i=0; i <newText.length; i++){
        if(newText[i].length > longest.length){
            longest =newText[i]
        }
    }
    return longest
}

module.exports = longestWord