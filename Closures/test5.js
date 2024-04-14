function counter() {
    let count = 0
    return () => count++
}

let c = counter()

console.log(c())
console.log(c())
console.log(c())