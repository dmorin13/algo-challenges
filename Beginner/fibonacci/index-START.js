/*
Write a function to return the nth element in Fibonacci sequence,
where the sequence is:
    [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …]
*/

// P:we're given a sequence of numbers 
// R: value of n 
// E:
// P:declare the first variable to  rep the first number 
// define a second variable to rep the second num utilix the while loop define a counter



function fibonacci(n) {
    let previous = 1,
        current = 1

    if (n <= 1) {
        return 1
    } else {
        let counter = n - 1

        while (counter) {
            let temp = current
            current += previous
            previous = temp
            counter --
        }
    }
    return current
}

// [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …]

function fibonacci(n){
    let num1 =0 
    let num2 =1
    let counter =1
    
    while (counter <= n){
        let sum =0 
        // 2=1+1
        //3=1 +2
        //5=3 +2
        sum =num1 +num2 

        //1 =1
        //1 =2
        //2=3
        num1 =num2
        //2=3
        //3=5
        num2 =sum

        counter ++
    }
    //2
    //3
    //5
    return num2
}

// function fibonacci(n) {
//     let [a, b] = [0, 1];
//     while (n-- > 0){
//         [a, b] = [b, a+b];
//     }
//     return b;
// }

module.exports = fibonacci