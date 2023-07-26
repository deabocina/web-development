function Car(brand, model, manufacturingYear, currentSpeed) {
    this.brand = brand
    this.model = model
    this.manufacturingYear = manufacturingYear
    this.currentSpeed = currentSpeed
}

Car.prototype.addSpeed = function(speed) {
    this.currentSpeed += speed
}

Car.prototype.showSpeed = function() {
    console.log(`Current speed is ${this.currentSpeed} km/h.\n`)
}

let myCar = new Car("Toyota", "Camry", 2015, 60);
myCar.addSpeed(20)
myCar.showSpeed()