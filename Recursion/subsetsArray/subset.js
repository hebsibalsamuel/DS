// https://leetcode.com/problems/subsets/submissions/1230271822/
let res = []

var subsets = function (nums) {
    helper(nums, [])
    return res;

}
function helper(input, output) {
    if (input.length === 0) {
        res.push(output)
        return output
    }
    //when both left and right is completed to the last then the control moves to the parent function
    //if that function return something then it is provided, if not undefined is printed
    //there are 14 function calls made totally and for last 8 alone we return a value
    //the top 6 functions return nothing in the function body so undefined is returned.

    let left = helper(input.slice(1), [...output, input[0]])
    let right = helper(input.slice(1), [...output])
    console.log('left', left)
    console.log('right', right)
}

// let ip = [1, 2, 3]
// let ip = [0]
// let subset = subsets(ip)
// console.log(subset)

// Approach 2 in leetcode

var subsetsArray = function (nums) {
    return helper(nums, [])

}
function helper(input, output) {
    let resArray = []
    if (input.length === 0) {
        resArray.push(output)
        return resArray
    }
    let left = helper(input.slice(1), [...output, input[0]])
    let right = helper(input.slice(1), [...output])
    console.log('left', left)
    console.log('right', right)
    let combinedArr = [...left, ...right]
    return combinedArr
}

let ip = [1, 2, 3]
// let ip = [0]
let subset = subsetsArray(ip)
console.log(subset)

//                                helper([1, 2, 3], [])
//                           /                                   \
//           helper([2, 3], [1])                                 helper([2, 3], [])
//           /               \                                   /                \
//  helper([3], [1, 2])  helper([3], [1])         helper([3], [2])          helper([3], [])
//       /             \         \                    /             \
// helper([], [1, 2, 3]) helper([], [1, 2]) helper([], [1, 3]) helper([], [1])   helper([], [2, 3])   helper([], [2]) helper([], [3]) helper([], [])

// O(2^n)
// where n is the length of the input array. This means that the program's execution time grows exponentially with the size of the input array.