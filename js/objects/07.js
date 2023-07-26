function Animal(name, sound, feeding) {
    this.name = name
    this.sound = sound
    this.feeding = feeding
}

Animal.prototype.description = function() {
    console.log(`\nThis ${this.name} makes a ${this.sound} sound and it feeds on ${this.feeding}.`)
}

Animal.prototype.feedingStatus = function(response) {
    if (response === 'yes') {
        console.log(`${this.name} has been fed!`)
    }
    else if (response === 'no') {
        console.log(`${this.name} has not been fed!`);
    }
    else {
        console.log(`Data is not recorded!`)
    }
}

function Cat(name, sound, feeding, breed) {
    Animal.call(this, name, sound, feeding)
    this.breed = breed
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat

Cat.prototype.description = function() {
    console.log(`This ${this.name} makes a ${this.sound} sound, feeds on ${this.feeding} and it belongs to the ${this.breed} breed.\n`)
}

let animal = new Animal('dog', 'woof woof', 'meat')
animal.description()
animal.feedingStatus("yes")

let cat = new Cat('cat', 'meow meow', 'fish', 'Bengal')
cat.description()