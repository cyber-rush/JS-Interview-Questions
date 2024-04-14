function useState() {
    let state = 0

    function setState(newValue) {
        state = newValue
    }

    function getState() {
        return state
    }

    return [getState, setState]
}

const [getCount1, setCount1] = useState() // Every time useState() is called it creates a new state variable, so the state of count1 and count2 are two separate variables
const [getCount2, setCount2] = useState()
setCount1(5)
setCount2(10)

console.log(getCount1())
console.log(getCount2())
