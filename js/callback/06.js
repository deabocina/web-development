function checkNumber(number) {
    return new Promise((resolve, reject) => {
        if (number % 2 === 0) {
            resolve("The number is even.\n")
        } else {
            reject("The number is odd.\n")
        }
    });
}

let number = 9

checkNumber(number)
    .then((message) => {
        console.log(message)
    })
    .catch((error) => {
        console.error(error)
    })