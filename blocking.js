
  function repeat(operation, num) {
    // modify this so it can be interrupted
    
    if (num <= 0) return;
    operation();
    setTimeout(function(){
        if(num % 10 === 0){
            repeat(operation, --num)
        }else{
            repeat(operation, --num)
        }
    });
    
    //  return repeat(operation, --num)
  }

  module.exports = repeat;