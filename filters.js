function filterLength(mes1){
    return mes1.message.length < 50;
}
function mappingArrayToString(mes1){
    return mes1.messag;
}
var messages = [{message:'dsaadas'}];
function getShortMessages2(messages){
    var result;
    //using chain
    //result = messages.filter(filterLength).map(mappingArrayToString);
    // const messages = [{message : 'dasdasdas'}];
    //No chain
    result = messages.filter(filterLength);
    result = result.map(mappingArrayToString);
    return result;
}

console.log(getShortMessages2(messages));
//module.exports = getShortMessages2;