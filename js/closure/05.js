function product(a) {
    return function (b) {
        if (b === undefined) {
            return a
        } else if (b < 20) {
            return product(a * b)
        } else {
            return product(a)
        }
    }
  }
  
  let productArrow = a => b => {
    return b === undefined ? a : (b < 20) ? product(a * b) : product(a)
  }
  
  console.log(`Function product ${product(1)(15)(30)(40)(2)(21)()}.`)
  console.log(`Arrow function product ${productArrow(1)(15)(30)(40)(2)(21)()}.`)