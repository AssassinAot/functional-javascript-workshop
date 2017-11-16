
var xNum = 5;
function doubleUp (num,multiplyNum){
    return num * multiplyNum;
};
function doubleAll(numbers){   
   var result = numbers.map(doubleUp.bind(this,xNum));
    return result;
}
module.exports = doubleAll;