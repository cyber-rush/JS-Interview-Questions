
const func = (val) => {
    return () => {
        if (val) {
            let count = 0;
            count += val;
            console.log(count);
        }

    };
};
console.log(func(5)());

/* The func function returns another function.
 This returned function, when invoked, checks if the val parameter passed
 to func is truthy. If it is, it declares a local variable count using let,
initializes it to 0, adds the value of val to count, and then logs the 
value of count.

However, when you invoke func(5)(), the inner function executes and logs count,
which is 5, as expected. But the outer function (func(5)) returns undefined 
because it doesn't explicitly return any value. Therefore, console.log(func(5)()) 
logs the output of the inner function (5) first, followed by the return value of
the outer function, which is undefined.
*/