function product(a) {
    return function (b) {
        if (arguments.length === 0) {
            return a
        } else if (b !== 0 && b % 2 === 0) {
            return product(a * b)
        } else {
            return product(a)
        }
    }
}

console.log(`The product is ${product(2)(5)(13)(10)(14)(177)(4)(0)()}.\n`)