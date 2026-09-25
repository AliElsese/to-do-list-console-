// عندي عملية معينه محتاج اكررها اكتر من مره بس بقيم مختلفه ساعتها بجمع العمليهvar getAvg دي في الفانكشن وابدا استخدمها مكان ما احتاجها
// function makes code re-usable

// ** Syntax **
// function functionName(parameters) {  // try to always make functionName as a verb
//     function job
// }
// functionName(arguments)              // function call , invoke

function getAvg(num1, num2) {
    let sum = num1 + num2;
    let result = sum / 2;
    console.log(result);
}
getAvg(10, 20);
getAvg(40, 60);

/////////////////////////////////////////////////////////////////////////////////////////////
// ** Return statement **
let x = getAvg(15, 20);     // void function
console.log(x);             // undefined

function getAvg2(num1, num2) {
    let sum = num1 + num2;
    let result = sum / 2;
    return result;          // any code after return will not work (VIP)
    return result * 4;
}
let y = getAvg2(15, 20);    // return function
console.log(y);             // 17.5

/////////////////////////////////////////////////////////////////////////////////////////////
// ** Function Types **
// 1. Declaration Function: any line starts with function keyword this will be declaration function
function sayHello(username) {
    console.log('Hello ' + username);
}
sayHello('Ali');

// 2. Expression Function:
let sayHello2 = function(username) {
    console.log('Hello ' + username);
}
sayHello2('Ali');

/////////////////////////////////////////////////////////////////////////////////////////////
// ** Self Invoked Function (Annonymous Function => function without name)
// Syntax:
// (function () {
//     function job
// })();

// Advantages: any variable inside this function will be local scope variable

/////////////////////////////////////////////////////////////////////////////////////////////
// ** Arrow Function: ES6
let sayHello3 = (username) => {
    return `welcome ${username}`;
}
sayHello3();
// this function if has only one return statement and only one parameter you can write it like this
// بتشيل اقواس البارامتر + بتشيل كلمة الريترن واقواس الفنكشن
let sayHello4 = username => `welcome ${username}`;
sayHello4('ali');

/////////////////////////////////////////////////////////////////////////////////////////////
// ** Default Parameters: ES6
function printUserInfo(username = 'ali elsese', age = 25, gender = 'Male') {
    console.log('username is ' + username + 'his age is ' + age + 'his gender is ' + gender);

    // ** Template Literal (Interpolition)
    console.log(`username is ${username} his age is ${age} his gender is ${gender}`);
}
printUserInfo()