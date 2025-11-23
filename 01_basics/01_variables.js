const accountId = 568846
let accountEmail = "appu@google.com"
var accountPassword = "12345"
accountCity = "nadiad"
let accountState;

// accountId = 2 // not allowed


accountEmail = "as@as.com"
accountPassword = "21212121"
accountCity = "baroda"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])