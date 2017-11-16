var numbers = [7, 6, 1, 4, 3];
console.log(numbers.sort(function(a, b) {
  return a - b;
}));
console.log(numbers.sort(function(a, b) {
    return b - a;
}));
// console.log(numbers);