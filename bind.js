var slice = Array.prototype.slice;

function logger(namespace){
    return function(){
        var newArray = slice.call(arguments);
        // console.log([namespace]);
        // console.log.apply(newArray);
      console.log.apply(this,[namespace].concat(newArray));
    };
}

module.exports = logger;