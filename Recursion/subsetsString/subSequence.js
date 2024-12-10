//subsequences
//approach1 using params
function subsequences(str) {
    // let res =[]
    return helper('', str)

}
function helper(up, p) {
    if (p === '') {
        console.log(up)
        return;
    }
    let curr = p[0]
    let next = p.substring(1)
    helper(up, next)
    helper(up + curr, next)

}

// console.log(subsequences('abc'))
//approach 2 pushing in an array
function subsequences1(str) {
    // let res =[]
    return helper1('', str)

}
function helper1(up, p) {
    if (p === '') {
        // console.log(up)
        let arr = []
        if (up != '') {
            arr.push(up)
        }
        return arr;
    }
    let curr = p[0]
    let next = p.substring(1)
    let left = helper1(up, next)
    let right = helper1(up + curr, next)
    console.log(left, right)
    return [...left, ...right]

}

console.log(subsequences1('abc'))

let input = 'abc'

//latest try
//printing only values
// function subsets(str) {
//     helper(str, '')
// }
// function helper(inputStr, outputStr) {
//     // atlast returing control to the helper calling inside subsets
//     if (inputStr === '') {
//         console.log(outputStr)
//         return;
//     }
//     let curr = inputStr[0]
//     helper(inputStr.substring(1), outputStr + curr)
//     helper(inputStr.substring(1), outputStr)
// }
// subsets(input)

//returning answer as array
// function helper1(inputStr, outputStr, result) {
//     if (inputStr === '') {
//         result.push(outputStr)        
//         return;
//     }
//     let curr = inputStr[0]
//     helper1(inputStr.substring(1), outputStr + curr, result)
//     helper1(inputStr.substring(1), outputStr, result)
//     return result

// }
// console.log(helper1(input, '', []))

//Having result array in the function body and ASCII values
function helper1(inputStr, outputStr) {
    let result = []
    if (inputStr === '') {
        //to eliminate the empty value
        if (outputStr !== '') {
            result.push(outputStr)
        }
        return result
    }
    let curr = inputStr[0]
    let res1 = helper1(inputStr.substring(1), outputStr + curr)
    let res2 = helper1(inputStr.substring(1), outputStr)
    let res3 = helper1(inputStr.substring(1), outputStr + curr.charCodeAt(0))
    return [...res1, ...res2, ...res3]

}
console.log(helper1(input, '', []))

