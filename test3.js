//Write a JS function to retrieve all the values of an object’s properties.

var argumentObj = {
 0: 'Adam',
 1: 'Eve',
 2: {},
 3: 100,
 4: true
};

function getValues(argument) {
 // make sure that `argument` is an object if not return empty array
 // returns an array of all the values of keys in an object
 if(typeof argument !== 'object'){
    argument = []
 }  
 var result = [];
   var size = Object.keys(argument);
    for(i=0 ; i < size.length; i++  ){
        result.push(argument[i]);
    }
    return result;

//    return Object[argument].reduce(function(){
        // return
//    } ,[]);
}

console.log(getValues(argumentObj));

// function getValues(argument) {
//     // return Array.prototype.slice.call(argument);
//     return Object.values(argument);
//     }

// result should be [‘Adam’, ‘Eve’, {}, 100, true]

//HINT:
// Try using the Object.keys() method -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
// Feel free to use google search to solve the problem



