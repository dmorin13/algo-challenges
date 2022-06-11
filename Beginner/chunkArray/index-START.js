/* 
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g  mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/
// the indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// indexOf(searchElement, fromIndex)

// searchElement
// Element to locate in the array.

// fromIndex Optional
// The index to start the search at. If the index is greater than or equal to the array's length, -1 is returned, which means the array will not be searched. If the provided index value is a negative number, it is taken as the offset from the end of the array. Note: if the provided index is negative, the array is still searched from front to back. If the provided index is 0, then the whole array will be searched. Default: 0 (entire array is searched).

// concat() & filter()
// Big O(n²)

// let array1 = ['a','b','c']

// let array2 = ['c','c','d','e'];

// let array3 = array1.concat(array2);

// array3 = array3.filter((item,index)=>{
//    return (array3.indexOf(item) == index)
// })



function chunkArray(array, size) {
    let result = []

    for (value of array){

        let lastArray = result[result.length -1 ]
        if(!lastArray || lastArray.length == size){
            result.push([value])
        }else{
            lastArray.push(value)
        }
    }

    return result
}

// function chunkArray(array, size) {
//     let result = []

//     let arrayCopy = [...array]

//     while (arrayCopy.length > 0) {
//         result.push(arrayCopy.splice(0, size))
//     }

//     return result
// }


// // USING .SLICE()

// function chunkArray(array, size) {
//     let result = []

//     for (i = 0; i < array.length; i += size) {
//         let chunk = array.slice(i, i + size)
//         result.push(chunk)
//     }

//     return result
// }

// The Set object lets you store unique values of any type, whether primitive values or object references.

// Description
// Set objects are collections of values. You can iterate through the elements of a set in insertion order. A value in the Set may only occur once; it is unique in the Set's collection.


// Set() Creates a new Set object.
// Big O(n)
// let array1 = ['a','b','c']
// let array2 = ['c','c','d','e'];
// let array3 = array1.concat(array2);




//P: we're given 2 parameters, 1 array and 1 number
// R: a nested array
// E: chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5)
// should return [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]

// P: declare an empty array
// utilize the for loop 
// i += size - we are incrementing by the sub-array: 0, 5, 10
// push the new sub array into the array, and utilize the slice method (i, i+size) --> tells you where to start the slice and end it - slice = clean cut 
// splice = messy fruit ninja
//return the newArray

// function chunkArray(array, size) {
//     let newArray = []
//     //let newSize = size
//     for(i = 0; i < array.length; i+= size) {
//         newArray.push(array.slice(i, i+size)) //.push pushes the new item to the end of the array
//     }
//     console.log(newArray)
//     return newArray
// }

//Kelly's Method
// function chunkArray(array, size) {
//     let chunks = []
//     while (array.length > 0){
//         chunks.push(array.slice(0, size))
//         array.splice(0,size) //after push it to the new array AKA chunk, then she spliced it off the original 
//     }
//     return chunks
// }



module.exports = chunkArray