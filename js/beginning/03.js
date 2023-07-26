function firstDigit(num) {
    let numStr = num.toString()
    return parseInt(numStr.charAt(0))
}
console.log(firstDigit(1254192518))