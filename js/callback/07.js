function sumTwoNumbers(a, b, callback) {
    setTimeout(function() {
        let sum = a + b
        callback(sum)
    }, 2000)
}

function callback(sum) {
    console.log(`The sum is ${sum}.\n`)
}

sumTwoNumbers(4, 5, callback)