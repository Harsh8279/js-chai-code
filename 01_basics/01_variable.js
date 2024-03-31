const account_id = 144553;
let email_id = "harsh.patel@google.com";
var account_pwd = "12345";
account_city = "Surat";

// account_id = 2 // not allowed 
email_id = "harsh@google.com"
account_city = "Ladakh"
let account_state;


/*
    prefer not to use var 
    because of issue in block scope and functional scope
*/

console.log("account Id -->",account_id);
console.log("account City -->",account_city);


console.table([account_id,account_city,email_id,account_pwd,account_state])