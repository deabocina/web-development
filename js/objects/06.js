function Vehicle(brand, manufacturingYear) {
    this.brand = brand
    this.manufacturingYear = manufacturingYear
}

Vehicle.prototype.drive = function() {
    console.log(`\nDrive a vehicle of brand ${this.brand} manufactured in ${this.manufacturingYear}.`)
}

function Car(brand, manufacturingYear, color, numberOfDoors) {
    Vehicle.call(this, brand, manufacturingYear)
    this.color = color
    this.numberOfDoors = numberOfDoors
}

Car.prototype = Object.create(Vehicle.prototype)
Car.prototype.constructor = Car

Car.prototype.park = function() {
    console.log(`The car ${this.brand} in ${this.color} color is parked.`)
}

function Motorcycle(brand, manufacturingYear, type) {
    Vehicle.call(this, brand, manufacturingYear)
    this.type = type
}

Motorcycle.prototype = Object.create(Vehicle.prototype)
Motorcycle.prototype.constructor = Motorcycle

Motorcycle.prototype.driveFast = function() {
    console.log(`Ride a ${this.type} motorcycle of brand ${this.brand} manufactured in ${this.manufacturingYear} at high speed!`)
}

let car = new Car("BMW", 2022, "black", 5)
car.drive()
car.park()

let motorcycle = new Motorcycle("Honda", 2020, "sport")
motorcycle.drive()
motorcycle.driveFast()