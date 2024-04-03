let obj1 = {
    name: 'Hello',
    age: 24
};
let obj2 = obj1;

console.log(obj1 === obj2);
console.log(obj1 == obj2);

obj2.name = 'Rahul';

console.log(obj1);
