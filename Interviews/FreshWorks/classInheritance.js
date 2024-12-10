//functions can act as class in js. Class has variables and methods. Functions can also create a same pattern
function Car(model) {
    this.model = model;
}

//Car class has a log function.
Car.prototype = {
    constructor: Car,
    log: function () {
        return `The newly launched car is ${this.constructor.name} ${this.model}`;
    }
}
//Honda class needs to borrow it.
function Honda(model) {
    // this.model = model;
    // Car.call(this, model);
}

// create prototype connection, 
// STEP 1
//add the prototype to the same prototype
//STEP 2
//Inside Honda use  the call method and call the Car with Honda this and model
Honda.prototype = Object.create(Car.prototype)
Honda.prototype.constructor = Honda;
let a = new Honda('City 2024');
Car.call(Honda, "honda")

console.log(a)
console.log(a.log())