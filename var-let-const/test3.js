let x = 10

{
    console.log(x) // Here it will look for a reference of x in this current scope and find let x below it thus it goes into TDZ. If there had not been any let x in this scope then it would have taken the value of its parent i.e let x = 10
    let x = 20
    console.log(x)
}

/* Inside the block, there is a reference to x before it is declared with let.
 This will result in a ReferenceError because the variable x is not accessible until 
 it is declared. This is due to the temporal dead zone (TDZ) in JavaScript, 
 where variables declared with let or const are inaccessible until 
 they are fully initialized. */