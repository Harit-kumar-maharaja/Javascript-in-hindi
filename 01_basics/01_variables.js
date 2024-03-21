const accid = 12345
let accemail = "harit@google.com"
var accpass = "13579"
acccity = "jhajjar"
let accstate;

//not allowed to change const 
// accid = 2
accemail = "hk@gmail.com"
accpass = "246810"
acccity = "janakpuri"

console.log(accid);
console.table([accid , accemail  ,accpass , acccity , accstate])

//prefer not to use var b/c of issue in block and functional scope