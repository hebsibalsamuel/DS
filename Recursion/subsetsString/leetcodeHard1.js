// https://leetcode.com/problems/distinct-subsequences/submissions/1230326997/
// leetcode Hard problem - time limit exceeded
function numDistinct(str, compare) {
    return helper('', str, compare)

}
function helper(up, p, compare) {
    let count = 0
    if (p === '') {
        if (up === compare) {
            count = count + 1
        }
        return count
    }
    let curr = p[0]
    let next = p.substring(1)
    let left = helper(up, next, compare)
    let right = helper(up + curr, next, compare)
    return left + right
}

let countRes = numDistinct('rabbbit', 'rabbit')
console.log(countRes)