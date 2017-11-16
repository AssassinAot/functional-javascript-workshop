var a = [1,2,3,4];
function pushArray(a){
    a.push(0);
    return a;
}

var checkPush = pushArray(a);
console.log(pushArray(a));
//module.exports = pushArray;