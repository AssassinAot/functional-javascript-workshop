var array1 = [1,2,3,4];
var copy = [];
var reverseCopy = [];
// function copyPaste(ele){
//     copy.push(ele);
// }
function reverseBack(ele, index, array1){
    console.log('array1 value:', array1);
    reverseCopy[(array1.length-1-index)] = ele;
    // reverseCopy.push(array1.pop());
}
//array1.forEach(copyPaste);

 array1.forEach(reverseBack);
//console.log(copy);
 console.log(reverseCopy);
//For Each does not return anything