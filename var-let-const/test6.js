// var and let hoisting

console.log(x)
{
    var x = 2
    {
        let x = 5
    }

    console.log(x)
}