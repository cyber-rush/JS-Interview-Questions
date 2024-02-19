// Short circuiting with the concept of return values

function left() {
    return console.log('left')
}

function right() {
    return console.log('right')
}

left() || right()