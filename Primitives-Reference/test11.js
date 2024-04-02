
console.log({} == {}); // Since each {} represents a separate object in memory, even if they have the same structure, they are distinct objects. So, the comparison evaluates to false.
console.log({} === {}); // Similarly, === compares for strict equality, which also checks if the objects being compared are the same object in memory. Since both {} represent different objects, the comparison evaluates to false.
