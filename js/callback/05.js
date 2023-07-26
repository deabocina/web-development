function calculateSum(a, b) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}
async function calculateAndPrintSum(a, b) {
    let sum = await calculateSum(a, b)
    console.log(`The sum of ${a} and ${b} is ${sum}.\n`)
}
calculateAndPrintSum(5, 4)