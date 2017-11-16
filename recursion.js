

function countWithReducer(index,arr,fn,initial){
    if(index >= arr.length){
        return initial;
    }
    initial = fn(initial,arr[index],index,arr);
    return countWithReducer(index+1,arr,fn,initial);
}
function reduce (arr,fn,initial){
    var startIndex = 0;
    return countWithReducer(startIndex,arr,fn,initial);
}

module.exports = reduce;

//Hint 
// function reduce(arr, fn, initial) {
//     return (function reduceOne(index, value) {
//       if (index > arr.length - 1) return value // end condition
//       return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate
//     })(0, initial) // IIFE. kick off recursion with initial values
//   }

//   module.exports = reduce

