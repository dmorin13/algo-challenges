//write a program to check the number of occurrence of a character in a string 


//example= 'balloon'
// character= 'l'
// count =2

function countString(str, letter){
  let count =0;
  
  //looping through the items 
  for(let i=0; i < str.length; i++){
    //check if the character is at that position
    // The charAt() method returns a character at a specified index.
    // During each iteration, if the character at that index matches the required character to match, then the count variable is increased by 1.
    if(str.charAt(i)==letter){
      count+=1
    
    }
  }
  return count 
}

//take input from the user 
const string =prompt('Enter a string: ')
const letterToCheck=prompt('Enter a letter to check: ')

//passing parameters and calling the function 
const result = countString(string, letterToCheck)


//displaying the result 
console.log(result
  )

