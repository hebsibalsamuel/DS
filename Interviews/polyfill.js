
// ===================map polyfill======================
Array.prototype.mapPolyfill = function (filterFunc) {
    let res = []
    for (let i = 0; i < this.length; i++) {
        let mappedValue = filterFunc(this[i])
        res.push(mappedValue)
    }
    return res;


}

const multiplyByTwo = (ele) => ele * 2;
const mappedArray = arr.mapPolyfill(multiplyByTwo)
console.log(mappedArray)

// ===================filter polyfill======================

Array.prototype.filterPolyfill = function (filterFunc) {
    let filteredArr = []
    for (let i = 0; i < this.length; i++) {
        if (filterFunc(this[i]))
            filteredArr.push(this[i])
    }
    return filteredArr

}
let filteredArr = arr.filterPolyfill((e) => e % 2 === 0)
console.log(filteredArr)
// ======================== Reduce polyfill================================
Array.prototype.reducePolyfill = function (logicFunc, accumulator) {
    for (let i = 0; i < this.length; i++) {
        accumulator = logicFunc(accumulator, this[i])
    }
    return accumulator
}

let accumulatedValue = arr.reducePolyfill((accumulator, c) => {
    accumulator += c
    return accumulator
}, 0)
console.log(accumulatedValue)

let reduceArr = [
    { name: 'hebsi', age: 29 },
    { name: 'godson', age: 29 },
    { name: 'geziah', age: 3 },
    { name: 'john', age: 3 }
]

let accumulatedArr = reduceArr.reducePolyfill((accumulator, current) => {
    if (current.age < 5) {
        accumulator.push(current.name)
    }
    return accumulator
}, [])
console.log(accumulatedArr)

let accumulatedObj = reduceArr.reducePolyfill((accumulator, current) => {
    accumulator[current.age] = (accumulator[current.age] || 0) + 1
    return accumulator
}, {})
console.log(accumulatedObj)
// =======================String Concat polyfill==================================

String.prototype.concatpolyFill = function (...args) {
    let res = this
    console.log(args)
    for (let i = 0; i < args.length; i++) {
        res = res + args[i]
    }
    return res
}
let newstr1 = s1.concatpolyFill(s2, s2)
console.log(newstr1)


// ===================
// bind polyfill
// https://www.youtube.com/watch?v=ke_y6z0xRpk&list=PLlasXeu85E9eLVlWFs-nz5PKXJU4f7Fks
// ============chat gpt reduce result======================
if (!Array.prototype.reduce) {
    Array.prototype.reduce = function (callback, initialValue) {
        if (this === null || this === undefined) {
            throw new TypeError('Array.prototype.reduce called on null or undefined');
        }
        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }

        var array = Object(this);
        var length = array.length >>> 0;
        // will work for sum operations not sure if it will work for array and objects
        var accumulator = initialValue !== undefined ? initialValue : array[0];

        for (var i = initialValue !== undefined ? 0 : 1; i < length; i++) {
            //we are not calling it in reference to other object so undefined is passed
            accumulator = callback.call(undefined, accumulator, array[i], i, array);
        }

        return accumulator;
    };
}




// ================================ Other answers=========================================
// Check if Array.prototype.filter is not defined
// if (!Array.prototype.filter) {
Array.prototype.filter = function (callback) {
    if (this == null) {
        throw new TypeError('Array.prototype.filter called on null or undefined');
    }

    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    var newArr = [];
    for (var i = 0; i < this.length; i++) {
        // if (callback.call(thisArg, this[i], i, this)) {
        //     newArr.push(this[i]);
        // }
        if (callback(this[i])) {
            newArr.push(this[i]);
        }
    }
    return newArr;
};
// }
// Define an array
var numbers = [1, 2, 3, 4, 5];

// Define a callback function to filter even numbers
function isEven(number) {
    return number % 2 === 0;
}

// Use the filter method with the callback function
var evenNumbers = numbers.filter(isEven);

// Output the result
console.log(evenNumbers); // Output: [2, 4]


// ==================================================================
var numbers = [1, 2, 3, 4, 5];

function isGreaterThan(num) {
    return num > this.threshold;
}

var context = { threshold: 3 };

var filteredNumbers = numbers.filter(isGreaterThan, context);

console.log(filteredNumbers); // Output: [4, 5]

const arr = [1, 2, 3, 4, 5]