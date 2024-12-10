function curriedMultiply(first) {
    return function (second) {
        if (second) {
            return curriedMultiply(first * second);
        } else {
            return first;
        }
    };
}

console.log(curriedMultiply(2)(3)(10)()); // Output: 60


function hello(...params) {
    console.log(params)

}
hello(1, 2, 3, 4)
// all the paramters can be combined into one array later we can destructure them again

function curry(sumFunc) {
    //sumFunc is the 1st closure
    return function curriedFunc(...args) {
        //args is the second closure
        console.log(args)
        return function next(next) {
            // next is the third closure
            if (next) {
                //combine next value to the args array
                return curriedFunc(...args, next)
            }
            else {
                // return all accumulated array of params
                return sumFunc(args)
            }
        }
    }

}
function sum(accumulatedNos) {
    let sum = 0
    for (let i = 0; i < accumulatedNos.length; i++) {
        sum += accumulatedNos[i]

    }
    return sum
}

console.log(curry(sum)(1)(2)(3)(4)(5)())


function curry(sumFunc) {
    //sumFunc is 1st closure
    return function curriedFunc(...args) {
        //args is second closure
        console.log(args)
        if (args.length >= sumFunc.length) {
            return sumFunc(...args)
        }
        else {
            return function next(...next) {
                //next is 3rd closure. Next can be used without spread also
                return curriedFunc(...args, ...next)
            }
        }

    }

}
function sum(a, b, c, d) {
    return a + b + c + d
}

console.log(curry(sum)(1)(2)(3)(4))

// curry(sum)(1)(2)(3)(4)
// |
// └── curriedFunc([1])
//     |
//     └── next(2)
//         |
//         └── curriedFunc([1, 2])
//             |
//             └── next(3)
//                 |
//                 └── curriedFunc([1, 2, 3])
//                     |
//                     └── next(4)
//                         |
//                         └── curriedFunc([1, 2, 3, 4])
//                             |
//                             └── sum(1, 2, 3, 4)
