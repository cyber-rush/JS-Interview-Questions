const employeee = [
    {
        id: 0,
        name: "Ram",
        salary: 20000,
        age: 30
    },
    {
        id: 1,
        name: "Shyam",
        salary: 35000,
        age: 24
    },
    {
        id: 2,
        name: "Ravi",
        salary: 40000,
        age: 36
    }
]

const employeName = employeee.filter(e => e.salary > 30000)
console.log(employeName)

employeName.map(e => console.log(e.name))