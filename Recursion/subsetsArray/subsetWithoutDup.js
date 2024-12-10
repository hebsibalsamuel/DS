
var subsetsWithDup = function (nums) {
    return helper(nums.sort(), [], {})
}
//create a cache object for avoid duplicates
function helper(input, output, cache) {
    let resArray = []
    if (input.length === 0) {
        if (!cache[JSON.stringify(output)]) {
            cache[JSON.stringify(output)] = output
            resArray.push(output)
        }
        return resArray
    }
    let left = helper(input.slice(1), [...output, input[0]], cache)
    let right = helper(input.slice(1), [...output], cache)
    let combinedArr = [...left, ...right]
    return combinedArr
}

let ip = [1, 2, 3, 1]
let subset = subsetsWithDup(ip)
console.log(subset)