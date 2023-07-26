class Car {
    constructor(brand, model, colour, year, price, discount) {
      this.brand = brand
      this.year = year
      this.model = model
      this.colour = colour
      this.price = price
      this._discount = discount
    }
  
    setDiscount(value) {
      this._discount = value
    }
  
    getDiscount() {
      return this._discount
    }
  
    info() {
      console.log(`Car specifications: ${this.brand}, ${this.model}, ${this.year}, ${this.colour}, ${this.price}€`)
    }
  
    totalPrice() {
      let total = this.price * (1 - (this._discount / 100))
      console.log(`Total car price with discount is ${total}€.\n`)
    }
  }
  
  let car1 = new Car("Audi", "R8", "black", 2010, 70000, 0)
  let car2 = new Car("Alfa Romeo", "Giulietta", "red", 2016, 17000, 0)
  
  car1.setDiscount(15)
  car1.info()
  car1.totalPrice()
  
  car2.setDiscount(10)
  car2.info()
  car2.totalPrice()  