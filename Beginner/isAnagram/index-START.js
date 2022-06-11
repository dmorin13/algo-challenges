/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/



function isAnagram(stringA, stringB) {
    const sanitizeString = function (str) {
        return str.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
    }

    return sanitizeString(stringA) == sanitizeString(stringB)

}


// function isAnagram(stringA, stringB) {

//     function createCharMap(text) {
//         let charMap = {}
//         for (let char of text) {
//             if (charMap.hasOwnProperty(char)) {
//                 charMap[char]++
//             } else {
//                 charMap[char] = 1
//             }
//         }
//         return charMap
//     }

//     if (stringA.length === stringB.length) {

//         let stringAMap = createCharMap(stringA)
//         let stringBMap = createCharMap(stringB)

//         for (let char in stringAMap) {
//             if (stringAMap[char] !== stringBMap[char]) {

//                 return false
//             }
//         } return true

//     } else {
//         return false
//     }
// }


function isAnangram(stringA, stringB){
    //code goes here
    //function should return a boolean
    //check and compare lengths
    //sort the strings
    //compare the two sorted strings
    //check if the strings have different lengths 
    if(stringA.length !== stringB.length){
        return false
    }
    //sort two strings
    let s1= stringA.split('').sort('').join('')
    let s2 =stringB.split('').sort('').join('')
    //compare sorted strings

    return (s1 === s2)
   
}

// isAnagram()

module.exports = isAnagram