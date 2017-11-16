function reduceToOneArray( fn, item,index,array){
  // console.log(arg);
  // console.log('--------');
  // console.log(arguments);
    outPut.push(fn.call(this,item));
    return outPut;
}
module.exports = function arrayMap(arr,fn){
  return arr.reduce(reduceToOneArray.bind(this, fn), []);
};
// function a(x, y) {}
// doctor bind perfoms operation a on patient this
// a.bind(this, x, y);
// module.exports = function arrayMap(arr, fn, thisArg) {
//     return arr.reduce(function(acc, item, index, arr) {
//       acc.push(fn.call(thisArg, item, index, arr))
//       return acc
//     }, [])
//   }
// array.reduce(function (result, item, index, array), []);
// array.reduce(function (result, item, index, array), []);
// array.reduce(function (result, item, index), []);
// array - [a,b,c]
// result - output
// item - a // index 0
// item - b //index 1
// item c // index 2
// array - [a,b,c]