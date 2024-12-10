"use strict"

console.log(this)

//no this substitution happens in strict mode
// if this is undefined then global object is referenced
function hello() {
    console.log(this)
}
hello()

//in arrow function this always points to global object
const hello1 = () => {
    console.log(this)
}
hello1()

// OBJECTS

let obj = {
    name: 'hebsi',
    sayName: function () {
        console.log(this.name)
    },
    //the this of arrow function points the lexical scope ie the global scope in this case
    sayNameArrow: () => {
        console.log(this)
        console.log(this.name) //undefined
    },
    sayNameNested: () => {
        const thisCheck = () => {
            console.log(this, "thisCheck")
        }
        thisCheck()
    },
    sayNameNestedFunc: function () {
        const thisCheck = () => {
            console.log(this, "thisCheckFunc")
        }
        thisCheck()
    }

}
obj.sayName()
obj.sayNameArrow()
obj.sayNameNested()
obj.sayNameNestedFunc()

//constructor function
//this value is the helloClass when instance is created
function helloClass() {
    this.name = "hebsi"
    console.log(this)
    this.getName = () => {
        console.log(this.name)
    }
}
let helloConstructor = new helloClass()
//the function gets executed once the instance is created.