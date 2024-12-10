// Define a memoize function that takes a function as input
function memoize(func) {
    // Create an empty cache object to store results
    var cache = {};

    // Return a new function that will perform memoization
    return function () {
        // Convert arguments object into a string to use as cache key
        var argsKey = JSON.stringify(arguments);

        // Check if the result for given arguments exists in the cache
        if (!cache[argsKey]) {
            // If result doesn't exist, call the original function
            cache[argsKey] = func.apply(this, arguments);
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

// Memoize the fibonacci function
var memoizedFibonacci = memoize(fibonacci);

// Call the memoized function
console.log(memoizedFibonacci(10)); // Output: 55 (calculated)
console.log(memoizedFibonacci(10)); // Output: 55 (cached)