/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/



// FOR...IN ITERATION METHOD
// function maxRecurringChar(text) {
//     let charMap = {}
//     let maxCharValue = 0
//     let maxChar = ''
//     for (let char of text) {
//         if (charMap.hasOwnProperty(char)) {
//             charMap[char]++
//         } else {
//             charMap[char] = 1
//         }
//     }
//     for (let char in charMap) {
//         if (charMap[char] > maxCharValue) {
//             maxCharValue = charMap[char]
//             maxChar = char
//         }
//     }
//     return maxChar
// }

// FORMING ARRAYS FROM THE CHARACTER MAP METHOD
//  function maxRecurringChar(text) {
//      let charMap = {}
//      let charArray =[]
//      let valuesArray = []
//      let maxCharValue = 
//      for(let char of text) {
//          if (charMap.hasOwnProperty(char)) {
//              charMap[char]++
//          } else {
//              charMap[char] = 1
//          }
//      }
//      charArray = Object.keys(charMap)
//      valuesArray = Object.values(charMap)
//      maxCharValue = Math.max(...valuesArray)  
//      return charArray[valuesArray.indexOf(maxCharValue)]
//  }


// duck 
// duckling


// Dad will return d 

    //['s', '-s-u-s-b-s-n-s-h-s-j-s-m-s-k-s-l-s-t-s-w']= 12 

    // [s,s, s,s,s,s,s,s,s,s,s,]

    //[i, u, b, n, h, j, m,k,l,t,w,] =11 

    // alternative approach: 
    // 1 for loop for split, counting occurrences of each character 
    //  store in a charCount Obj {}

    //  macCount 
    //  var maxChar 
    
    function maxRecurringChar(text){
        let max = 0,
        maxChar ='';

    text.split('').forEach(char => {
        console.log(max)
        
        if (text.split(char).length > max){
            console.log(text.split(char).length)
            console.log(max)
            max =text.split(char).length;
            maxChar =char
        }
    })
    console.log(maxChar)
    return maxChar
    
}


    //d-u-c-k= 4 > 0 = condition met
    // max = 4 
    // maxChar =4 

   //loop around to the next word in the string 

    //duckling
    //d-u-c-k-l-i-n-g =8 >4 condition met 
    // max = 8 
    // maxChar =8
    //loop around to next word 

    //tea 

    // t-e-a 3 > 8 CONDITION NOT MET 
    // so code doesn't run maxChar stays 8 
    
    //loop around to the next word in teh string 

    //Tyrannosaurus
    //T-y-r-a-n-n-o-s-a-u-r-u-s =13 letters > 8 letters condition met 

    // max = 13 
    // maxChar =13




module.exports = maxRecurringChar;