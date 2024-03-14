// Loose and Strict equality
console.log(5 == "5"); // Here, 5 is a number and "5" is a string. However, due to type coercion with the == operator, the string "5" will be converted to a number before comparison. Since both sides are now numbers and have the same value, the expression evaluates to true.
console.log(5 === "5"); // Here, the === operator does not perform type coercion. Since 5 is a number and "5" is a string, they are of different types. Therefore, the expression evaluates to false.

