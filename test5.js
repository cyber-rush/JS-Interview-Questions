if ([]) {
    console.log('hello')
}
else {
    console.log('bye')
}




// Reason : In JavaScript, when using an array ([]) as a condition in an if statement, the array will be coerced into a boolean value. An empty array, when coerced to a boolean, results in true. Therefore, the if block will be executed, and 'hello' will be logged to the console.