// Closures concept --> Function returned inside another function
const func = (val) => {
    return () => {
        if (val) {
            let count = 0;
            count += val;
            console.log(count);
        }
        return count;
    };
};
console.log(func(5)());