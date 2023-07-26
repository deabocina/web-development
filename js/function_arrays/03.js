function print() {
    let isPositive = num => num >= 0 ? true : false
    let isEven = num => num % 2 === 0 ? "Even" : "Odd"
    let cube = num => num ** 3
    let helloWorld = () => console.log("Hello World!")

    console.log(isPositive(5))
    console.log(isPositive(-5))

    console.log(isEven(4))
    console.log(isEven(5))

    console.log(cube(3))
    helloWorld()
}
print()