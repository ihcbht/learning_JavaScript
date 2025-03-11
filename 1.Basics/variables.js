const  accountId=122556

let accountEmail="ashu@gmail.com"

var accountPassword= "258963"

//not preferred, but possible
accountCity= "BBSR"

//if declared and left without denining: undefined
let accountState;

//accountId= 2 -- not allowed
console.log(accountId);

/*
prefer not to use var
becoz of issue in block scope and functional scope
*/

//can change the values , let, var
accountEmail="das@gmail.com"
accountPassword= "741258"
accountCity= "KJR"
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
