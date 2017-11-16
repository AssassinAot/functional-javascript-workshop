// var count = 0;
// function isQuackTrue(item){
//     if(Object.prototype.hasOwnProperty.call(item, 'quack')){
//         count += 1;
//     }
//     return count;
// };
// function duckCount(){
//  Array.prototype.slice.call(arguments).filter(isQuackTrue);
//  return count;
// }

// // duckCount({quack: true}, 0);

// module.exports = duckCount;


// filter [1,2,3,4] = [4] 1
// [{},{quack: true},{}] = [{quack: true}] 1

function isQuackTrue(item){
    return Object.prototype.hasOwnProperty.call(item, 'quack');
};
function duckCount(){
     console.log( Array.prototype.slice.call(arguments))
 var newArray = Array.prototype.slice.call(arguments).filter(isQuackTrue);
 console.log(newArray); 
 return newArray.length;
}
module.exports = duckCount;
// duckCount({quack: true}, 0);
