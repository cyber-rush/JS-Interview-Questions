const jonas = {
    firstName: 'jonas',
    year: 1991,
    greet: () => console.log(`Hey ${this.firstName}`)
}

jonas.greet()