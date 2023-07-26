function Car(brand, model, colour, year, price, discount) {
    this.brand = brand
    this.year = year
    this.model = model
    this.colour = colour
    this.price = price
    let _discount = discount
  
    this.setDiscount = function(value) {
      _discount = value
    }
  
    this.getDiscount = function() {
      return _discount
    }
    
    this.info = function() {
      console.log(`Car specifications: ${this.brand}, ${this.model}, ${this.year}, ${this.colour}, ${this.price}€`)
    }
    
    this.totalPrice = function() {
      let total = this.price * (1 - (_discount / 100))
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