// ** Variables hoisting **
console.log('hello');
var username = 'ali';
console.log('world');

// Js will read this code as:
// var username;
// console.log('hello');
// username = 'ali';
// console.log('world');

console.log(y);             // undefined not error
var y = 10;
// in any language this code will give error

/////////////////////////////////////////////////////////////////////////////////////////////
// ** Function hoisting **
sayHello2('Ahmed');
function sayHello2(username) {
    console.log('Hello ' + username);
}
// Js will read this code as:
// function sayHello2(username) {
//     console.log('Hello ' + username);
// }
// sayHello2('Ahmed');
// in any language this code will give error

sayHello('ali');
var sayHello = function(username) {
    console.log('Hello ' + username);
}
// Js will read this code as:
// var sayHello;
// sayHello('ali');
// sayHello = function(username) {
//     console.log('Hello ' + username);
// }
// output: TypeError: sayHello is not a function