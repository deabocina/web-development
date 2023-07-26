function countDigits(n, z) {
    let str = n.toString()
    let count = 0

    for (let i = 0; i < str.length; i++) {
        if (str[i] === z.toString()) {
            count++
        }
    }
    console.log(`In the number ${n}, we have ${count} occurrences of the digit ${z}.\n`)
}

countDigits(2955, 5)