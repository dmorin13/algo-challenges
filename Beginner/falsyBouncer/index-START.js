/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/


function falsyBouncer(array) {
  // USING A FOR OF LOOP
    let result =[]
    
    for (value of array){
        if(value){
            result.push(value)
        }
    }
    
    return result
}


// The filter() method creates a new array with all elements that pass the test implemented by the provided function.- returns a boolean


// callbackFn

// The function is called with the following arguments:

// element
// The current element being processed in the array.

// index
// The index of the current element being processed in the array.

// array
// The array on which filter() was called.


// filter((element, index) => {

//filter((element, index, array) => 

// USING .FILTER()

// function falsyBouncer(array) {
//     return array.filter((value) =>{
//       return Boolean(value)  
//     })
// }



module.exports = falsyBouncer