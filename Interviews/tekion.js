// const memoize = (func) => {
//     // declaring our local memory to store the result for future execution
//     let cache = {}; 
//     return function() {
//         // The arguments are the parameters for the func
//         let key = JSON.stringify(arguments); 
//         if (cache[key]) {
//             return cache[key]; // return if the cache contians the reuslt
//         } else { 
//             // if not do the operation store it in cache and return it.
//             let val = func.apply(this, arguments); 
//             cache[key] = val;
//             return val;
//         }
//     };
// }
