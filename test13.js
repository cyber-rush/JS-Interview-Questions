
// Function scope only and (no block) scope in var 
var a = 10
function one() { // In JavaScript, variables declared with the var keyword inside a function are local to that function and not accessible outside of it. This concept is known as function scope. 
    var a = 20
    console.log(a)
}
one()
if (1) {
    var a = 30  // Inside the if block, var a = 30; reassigns the global variable a to 30. This change affects the global variable because var declarations are hoisted to the top of their function or global scope.
    console.log(a)
}

console.log(a)
