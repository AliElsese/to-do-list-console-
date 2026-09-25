// ** var **
//      - (Current execution context) (قليلة الادب مش بيربيها غير الفانكشن سكوب)
var isLoggedIn = true; // ** Global Scope
function printUsername() {
    if(isLoggedIn) {
        var username = 'alielsese'; // ** Function Scope
    }
    console.log(username);      // output: alielsese
}
// console.log(username);          // output: ReferenceError: username is not defined
console.log(window.isLoggedIn); // output: true
printUsername();

/////////////////////////////////////////////////////////////////////////////////////////////
// ** let **
//      - (Block Scope)
let address = '10 main street';
console.log(address);           // output: 10 main street
console.log(window.address);    // output: undefined

//      - (Allows reassignment but not redeclaration)
address = '20 branche street';  // ** Re-assigned
console.log(address);           // output: 20 branche street
// let address = '30 street';   // output: SyntaxError: Identifier 'address' has already been declared // ** Re-declared

/////////////////////////////////////////////////////////////////////////////////////////////
// ** const **
//      - (Block Scope)
const age = 29;
console.log(age);               // output: 29
console.log(window.age);        // output: undefined

//      - (Does not allow reassignment or redeclaration)
age = 30;                       // output: TypeError: Assignment to constant variable. // ** Re-assigned
console.log(age);
// const age = 35               // output: SyntaxError: Identifier 'age' has already been declared // ** Re-declared