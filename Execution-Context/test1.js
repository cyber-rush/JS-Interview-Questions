greet('John')

function greet(name) {
    console.log('Hello', name)
}
var greet = (name) => {
    console.log('Good Day', name)
}


greet('John')



/* Solution :
    Phase 1(Memory creation Phase): Here the whole Execution context will be created 
    where first the var 'greet' will be assigned undefined and later the whole function
    as the second greet() is the function statement.
    
    Phase 2(Code Execution Phase): The first function call will result to the one in the function statement one.The second line is executed and now the greet var value is changed to the new one and hence 
    in the second function call it will result to the var greet one.
*/