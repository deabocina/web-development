void function operators(num1, num2, operator) {
    let result

    if (operator === "+") {
        result = num1 + num2
        console.log(`${num1} + ${num2} = ${result}`)
    }
    else if (operator === "-") {
        result = num1 - num2
        console.log(`${num1} - ${num2} = ${result}`)
    }
    else if (operator === "*") {
        result = num1 * num2
        console.log(`${num1} * ${num2} = ${result}`)
    }
    else if (operator === "/") {
        result = num1 / num2
        console.log(`${num1} / ${num2} = ${result}`)
    }
    else {
        console.log("Invalid input. Please try again.")
    }
}(2, 5, "*")