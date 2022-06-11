/*
Write a function that returns the factorial of 
the provided integer(n). E.g
    factorial(5) // should return 120
*/


function factorial(n, memo) {
    memo = memo || {}
    //n is a number property in the object
    //memo [n] is accessing the property, using bracket notation 
    if(memo[n]){
        return memo[n]
        //if true execute return memo
    }  
    if (n === 0) {
        return 1
    }
    return memo[n] = n * factorial(n - 1, memo)
}


// // USING A FOR LOOP

// function factorial(n) {
//     if (n <= 1) {
//         return 1
//     }
//     for (let i = n - 1; i >= 1; i--) {
//         n *= i;
//     }
//     return n;
// }

// // USING A WHILE LOOP

// function factorial(n) {
//     var result = n
//     if (n <= 1) {
//         return 1
//     }
//     while (n > 1) {
//         n--
//         result *= n
//     }
//     return result
// }


// function factorial(n) {
//     //Kelly's solution:

//     let product = 1;
//     for (let i = 1;i <= n;i++) {
//       product *= i;
//     }
//     return product;
//   }

module.exports = factorial