
function countTheNumbersOfObject (outPutObject,currentInput){
    var countCurrent = 0;
    var value = currentInput;
    if(!outPutObject.hasOwnProperty(value))
    {
        outPutObject[value] = 1;
    }else{
        countCurrent = outPutObject[value];
        countCurrent = countCurrent + 1
        outPutObject[value] = countCurrent ;
    }
    return outPutObject;
}
function countWords(inputWords){
  var resultWordReduce = inputWords.reduce(countTheNumbersOfObject,{});  
  return resultWordReduce;
}

//{} is mean initial

//Better solution

function countTheNumbersOfObject (outPutObject,currentInput){
    outPutObject[currentInput] = outPutObject[currentInput] + 1 || 1;
    return outPutObject;
}
function countWords(inputWords){
  var resultWordReduce = inputWords.reduce(countTheNumbersOfObject,{});  
  return resultWordReduce;
}

console.log(countWords( ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']));