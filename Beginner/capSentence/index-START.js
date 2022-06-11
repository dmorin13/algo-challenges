/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/

const vowelsCounter = require("../vowelsCounter/index-START");

/* Write a function that'd receive a param called 'text'. 
Next within the function we have to go through the text and search for occurances of the vowels ( a- e -i- o- u) 
 the function the returns the total number of matches vowels found


*/

//declare a constant 
const vowels =['a','e','i','o','u']

function vowelCounter(text){
  let counter =0;

  // for... of loop to iterate through e/ letter of the text  
  //control for casing 
  for(let letter of text.toLowerCase()){
    if(vowels.includes(letter)){
      counter++
    }
  }
  //returns # of vowels
  return counter
}


// P.R.E.P 
// Parameters, Return, Example, Pseudocode.
// P: given a string containing two or more words 
// R: a string w/ the equivalent of a sentecne when capitalized 
// E: capSentence ('the tales of the scotch!')// returns The Tales of Scotch
// P: we take the string and psplit it 
// then we take each element and loop throught to take the 0 index of each one 
// we use the uppercase method then we join back with the .join() method 


// function capSentence(text) {
//   function capSentence(text) {
//     let wordsArray = text.toLowerCase().split(' ')
    
//     let capsArray = wordsArray.map( word=>{
//       return  word.replace(word[0], word[0].toUpperCase())
//     })
  
//     return capsArray.join(' ')
//   }
// }
// function capSentence(text) {
//   let wordsArray = text.toLowerCase().split(' ')
//   let capsArray = wordsArray.map(word=>{
//       return word[0].toUpperCase() + word.slice(1)
//   })

//   return capsArray.join(' ')
// }

//The substring() method returns the part of the string between the start and end indexes, or to the end of the string.
//indexStart
//The index of the first character to include in the returned substring.
// indexEnd Optional
// The index of the first character to exclude from the returned substring.

function capSentence(text) {
let newText = text.toLowerCase().split(' ')
for (let i=0; i< newText.length; i++){
  newText[i]=newText[i].charAt(0).toUpperCase() + newText[i].substring(1)
  }
return newText.join(' ')
}


module.exports = capSentence