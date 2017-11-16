var statusParam = 'status';   
var response = [ {status : 'success'
                  ,data : 'yes'},
                 {status : 'success'
                  ,data : 'hello'
                  ,code : 200},
                 {status : 'error',
                  error : 'no'} ];
function groupByKey(response,statusParam){
    var output = { };
    response.forEach(function(statusParam) {
        if(response.status === 'success'){
            output.success = response
        }
    }, this);
    return output;
};
console.log(groupByKey(response,statusParam));                  