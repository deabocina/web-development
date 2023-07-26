const prompt = require("prompt-sync")({ sigint: true })

let sumEven = 0
let sumOdd = 0
let num = 0

const sumEvenOdd = () => {
    if (num % 2 === 0) {
        sumEven += num
    } else {
        sumOdd += num
    }
}

while (true) {
    num = parseInt(prompt("Enter a number: "))
    if (isNaN(num)) {
        console.log("Input must be a number!")
        continue
    }
    if (num === 0) {
        break
    }
    sumEvenOdd()
}
console.log(`Sum of even numbers: ${sumEven}, sum of odd numbers: ${sumOdd}`)