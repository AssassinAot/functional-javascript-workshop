// var goodUsers = [
//             {id:1}
//             ,{id:2}
//             ,{id:3}
//             ];
//  var testAllValid = checkUsersValid(goodUsers);
 //testAllValid = ([{id:2,id:1}]);
// function isUserExistInArray(user){
//         return goodUsers[user];
// };             
function checkUsersValid(goodUsers){
    return function AllUsersValid(submittedUsers){
            //Solution here
            return submittedUsers.every( function allUserSubmit(user){
                                        return goodUsers.some(function isGoodUser(goodUser){
                                                                return goodUser.id === user.id;
                                                                })
                                    });
    };
};

//console.log(checkUsersValid);
module.exports = checkUsersValid;