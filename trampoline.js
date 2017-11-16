function repeat(operation, num) {
    // Modify this so it doesn't cause a stack overflow!
    if (num <= 0) return
    operation()
    if(num % 10 === 0){
        return repeat(operation, --num)
    }else{
        return trampoline(operation);
    }
    
  }
 
  function trampoline(fn) {
    // You probably want to implement a trampoline!
  }
 
  module.exports = function(operation, num) {
    // You probably want to call your trampoline here!
    trampoline(operation);
    return repeat(operation, num)
  }
 

//This show when verify pass
//   function repeat(operation, num) {
//     return function() {
//       if (num <= 0) return
//       operation()
//       return repeat(operation, --num)
//     }
//   }

//   function trampoline(fn) {
//     while(fn && typeof fn === 'function') {
//       fn = fn()
//     }
//   }

//   module.exports = function(operation, num) {
//     trampoline(function() {
//       return repeat(operation, num)
//     })
//   }
