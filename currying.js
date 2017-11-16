
    function curryN(fn, n) {
        n = n || fn.length;
        console.log('What is n=',n);
        // SOLUTION GOES HERE
            return function x(arg){ 
                console.log('What is arg=',arg);
                        if(n<=1) return fn(arg)
                        return curryN(fn.bind(this,arg),n-1);
                    }; 
        }

      
  



    //   function add3(one, two, three) {
    //     return one + two + three
    //   }
    //   curryN(add3)(1)(2)(3);
      module.exports = curryN