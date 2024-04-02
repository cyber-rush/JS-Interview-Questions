let x = 10

{
    console.log(x)
    let x = 20
    console.log(x)
}

/* Inside the block, there is a reference to x before it is declared with let.
 This will result in a ReferenceError because the variable x is not accessible until 
 it is declared. This is due to the temporal dead zone (TDZ) in JavaScript, 
 where variables declared with let or const are inaccessible until 
 they are fully initialized. */