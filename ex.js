var statusParam = 'status';
var response = [ {status : 'success'
                  ,data : 'yes'},
                 {status : 'success'
                  ,data : 'hello'
                  ,code : 200},
                 {status : 'error',
                  error : 'no'} ];   
function filterStatusSuccess(res){
    return res.status === 'success' ;
}
function filterStatusError(res){
    return res.status === 'error' ;
}      
function groupByKey(response,statusParam){          
    var output = { } ;
    if(statusParam === 'status'){
        output.success = response.filter(filterStatusSuccess);
        output.error   = response.filter(filterStatusError);
    }
 
   return output;
};
// Bank Solution
function groupByKey(response, key){
    var result = {};
    for(var i = 0 ; i < response.length ; i++){
        if (result[response[i][key]] === undefined) {
            result[response[i][key]] = [];
        }
        result[response[i][key]].push(response[i]);
    }
    return result;
 }
//  console.log(groupByKey(response, 'status'));
console.log(groupByKey(response,statusParam));

//P' Chong
function groupByKey2(response, key)
{
   // var initObject = {};
   var output = response.reduce(function(accumulatorObject, currentObject) {
       var value = currentObject[key];
       if(!accumulatorObject.hasOwnProperty(value))
       {
           accumulatorObject[value] = [];
       }
       accumulatorObject[value].push(currentObject);

       return accumulatorObject;
   }, {});

   //--------------------

   return output;
}