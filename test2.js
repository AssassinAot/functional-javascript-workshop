//Given an array
var numbers = [10,22,1,23,4,7,9,10];
// var numbers = [10,22,1,23,4,7,9,2];

//****to optimize should be modular function
function compareFn(a,b){
    return a -b;
}
//******

console.log(numbers);
var sortedNumbers = numbers.sort(compareFn);
// var sortedNumbers = numbers.sort();
console.log(sortedNumbers);
// Step 1 Sort the number array and assign to sortedNumbers
// Step 2 Write a function called searchMe which accepts two arguments
// sortedNumbers and numberToSearch and return the index of the numberToSearch
// if found in sortedNumbers
function searchMe (sortedNumbers, numberToSearch) {
    return sortedNumbers.indexOf(numberToSearch);
// return index of the numberToSearch if it is found in searchMe
}
// eg: Given an array
// numbers => [10,22,1,23,4,7,9,10];
// sortedNumbers => [1,4,7,9,10,10,22,23];
// searchMe(sortedNumbers, 7); => should console.log(2)


console.log(searchMe(sortedNumbers, 7));