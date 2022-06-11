/* CHALLENGE
Given two strings of equal length, 
calculate and return the the hamming distance.
The Hamming distance between two strings of equal length is the number of positions at which the corresponding symbols are different.
equal length of words, but letters dont match o - i 
E.g hammingDistance('rover', 'river') // should return 1
*/

//P: we're given 2 strings of equal length

// R: calculate and return the hamming distance 

// E: E.g hammingDistance('rover', 'river') // should return 1 - b/c i and o are different and that is the 1 difference between the 2 words 

//P: loop through each letter of each string and compare it to each other
// frequency pattern: going over a sequence of data and checking for a particular condition

//return 1 if not equal




function hammingDistance(stringA, stringB) {
    
    let result = 0

    if (stringA.length == stringB.length) {

        for (let i = 0; i < stringA.length; i++) {
            if (stringA[i].toLowerCase() != stringB[i].toLowerCase()) {
                result++
            }
        }
        return result
    } else {
        throw new Error('Strings do not have equal length')
    }
}


function hammingDistance(stringA, stringB){
    let diffCount=0
    for(let i=0; i < stringA.length; i++){
        if(stringA[i] !== stringB[i]){
            diffCount += 1
        }
    }
    //hamming distance
    return diffCount
}

//P: we're given 2 strings of equal length
// R: calculate and return the hamming distance 
// E: E.g hammingDistance('rover', 'river') // should return 1 - b/c i and o are different and that is the 1 difference between the 2 words 
//P: loop through each letter of each string and compare it to each other
// frequency pattern: going over a sequence of data and checking for a particular condition
//return 1 if not equal

// function hammingDistance(stringA, stringB) {
//     let diffCount = 0

//     for (let i = 0; i < stringA.length; i++) {
//         if (stringA[i] !== stringB[i]) {
//             diffCount += 1
//         }
//     }  
//     return diffCount
// }




module.exports = hammingDistance