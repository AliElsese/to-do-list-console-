// ** Arithmetic Operators
let num1 = 20;                      // ** Assignment
let num2 = 10;

console.log(num1 + num2);   // 30   // ** Sum (addition)
console.log(num1 - num2);   // 10   // ** Subtraction
console.log(num1 / num2);   // 2    // ** Divid (division)
console.log(num1 * num2);   // 200  // ** Multiplication
console.log(num1 % num2);   // 0    // ** Remainder (modulus)

/////////////////////////////////////////////////////////////////////////////////////////////
// ** Assignment Operators
num1 += num2;
console.log(num1);          // 30   // ** Addition Assignment Operator

num1 -= num2;
console.log(num1);          // 10   // ** Subtraction Assignment Operator

num1 *= num2;
console.log(num1);          // 10   // ** Multiplication Assignment Operator

num1 **= num2;
console.log(num1);          // 10   // ** Exponentiation Assignment Operator

num1 /= num2;
console.log(num1);          // 10   // ** Division Assignment Operator

num1 %= num2;
console.log(num1);          // 10   // ** Remainder Assignment Operator

/////////////////////////////////////////////////////////////////////////////////////////////
// ** Comparison Operators
// 1. == : compare between values not types
console.log(5 == '5');      // true

// 2. === : compare values & types (identical)
console.log(5 === '5');     // false

// 3. != : not equal values
console.log(5 != '5');      // false

// 4. != : not equal values or types (not identical)
console.log(5 !== '5');     // true

// 5. > : greater than , >= : greater than or equal
// 6. < : less than , <= : less than or equal

/////////////////////////////////////////////////////////////////////////////////////////////
// ** Logical Operators
// 1. && : all sided operators should be truthy
console.log(false && false);    // false
console.log(true && false);     // false
console.log(true && true);      // true
console.log(false && true);     // false

// 2. || : one of sided operators should be truthy
console.log(false || false);    // false
console.log(true || false);     // true
console.log(true || true);      // true
console.log(false || true);     // true

// 3. ! : Not
console.log(!true);             // false
console.log(!false);            // true