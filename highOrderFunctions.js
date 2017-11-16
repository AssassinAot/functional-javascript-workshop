//Simple Way to call Function multiple time just looping
// function repeat(operation,num){
//     for(i=0;i<num;i++){
//         operation();
//     }
// };


//Advance Way to do with recursive
function repeat(operation,num){
    console.log('init' + num);
    if(num <= 0){
        return;
    }
    operation();
    console.log('middle' + num)
    return repeat(operation,--num);
    console.log('After' + num)
}
module.exports = repeat;