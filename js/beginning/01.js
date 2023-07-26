const prompt = require("prompt-sync")({ sigint: true })

void function average() {
    let num1 = parseInt(prompt("Enter the 1st number: "))
    let num2 = parseInt(prompt("Enter the 2nd number: "))
    let num3 = parseInt(prompt("Enter the 3rd number: "))

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        console.log("Invalid input. Please try again.")
    } else {
        let average = (num1 + num2 + num3) / 3
        console.log(`\nArithmetic mean of ${num1}, ${num2}, and ${num3} is ${average}.\n`)
    }
}()