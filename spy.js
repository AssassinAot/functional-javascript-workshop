//var a = { x : function dododo(){ return 'ddddd'; }  };
// Spy ( a , 'x')



function Spy (target,method){
    console.log(target);
    console.log(method);
    var originalFn  = target[method];
    var result = { count : 0 };
    target[method] = function spyFn(){
        result.count++;
        return originalFn.apply(this,arguments);
    }
    console.log(result.count);
    return result;
};


module.exports = Spy;