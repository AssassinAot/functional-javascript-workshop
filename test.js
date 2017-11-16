// Write a JavaScript program to calculate the factorial of a number
// using RECURSION
// In mathematics, the factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than
// or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120
function factorial(x) {
        console.log(x);
        if (x <=1 ) return x;
       return x * factorial(x-1);
}
console.log(factorial(5));