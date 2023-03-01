//recursion problem and using object as ref

// function fib(n){
// 	if(n<2){
// 		return n;
// 	}
// 	return  fib(n-1) + fib(n-2)

// }
const fib = n => {
    const memo = {};
    for (let i = 0; i <= n; i++)
    {
        if (i < 2)   memo[i] = i;
        else memo[i] = memo[i-2] + memo[i-1];
    }
    return memo[n];
}
console.log(fib(10))
// similar approach as object but using array
// const fib = n => {
//     let arr = [0, 1];
    
//     for (let i = 2; i <= n; i++) {
//         arr.push(arr[i-2] + arr[i-1]);
//     }
    
//     return arr[n];
// };

// function  memoDecorator(f) {
//     let map = new Map();
//     let func = args => {
//         if(map.has(args)) {
//             return map.get(args)
//         } else {
//         let result = f(args)
//             map.set(args, result)
//        return  result 
//     }
// }
// return func
// }

// function fib(n) {
//     if(n < 2) return n
//     return fib(n - 1) + fib(n - 2)
//     }

// fib = memoDecorator(fib);