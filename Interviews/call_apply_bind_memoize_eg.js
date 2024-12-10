let obj = {
    name: "hebsi",
    sayHi: function () {
        return this.name
    }
}

let obj1 = {
    name: "geziah"
}

console.log(obj.sayHi())
console.log(obj.sayHi.call(obj1))
console.log(obj.sayHi.apply(obj1))
let newBinding = obj.sayHi.bind(obj1)
console.log(newBinding())

// Define a memoize function that takes a function as input
function memoize(func) {
    // Create an empty cache object to store results
    var cache = {};

    // Return a new function that will perform memoization
    console.log("****", cache)
    return function () {
        // Convert arguments object into a string to use as cache key
        console.log("****", arguments)
        var argsKey = JSON.stringify(arguments);
        console.log("****", argsKey)

        // Check if the result for given arguments exists in the cache
        if (!cache[argsKey]) {
            // If result doesn't exist, call the original function... we can use either call or apply
            // cache[argsKey] = func.apply(this, arguments);
            cache[argsKey] = func.call(this, ...arguments);
        }

        // Return the cached result
        return cache[argsKey];
    };
}

// Define a function to be memoized
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
function twoParams(param1, param2) {
    return param1 * param2
}

// Memoize the fibonacci function
var memoizedFibonacci = memoize(fibonacci);
var memoizedTwoparams = memoize(twoParams);


// Call the memoized function
console.log(memoizedFibonacci(10)); // Output: 55 (calculated)
console.log(memoizedFibonacci(10)); // Output: 55 (cached)
console.log(memoizedFibonacci(15));

console.log(memoizedTwoparams(15, 10));
console.log(memoizedTwoparams(15, 10));
