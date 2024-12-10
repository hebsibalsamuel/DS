// https://leetcode.com/problems/positions-of-large-groups/

const largeGroupPositions = function (s) {
    let res = []
    const minLength = 3
    let pointer1 = 0
    let pointer2 = 1
    let currLength = 1
    while (pointer2 < s.length) {
        if (s[pointer1] === s[pointer2]) {
            currLength += 1
            pointer2++
        }
        else {
            if (currLength >= minLength) {
                res.push([pointer1, pointer2 - 1])
            }
            pointer1 = pointer2
            pointer2 += 1
            currLength = 1
        }

    }
    //handling edge case for a ='aaa'
    if (currLength >= minLength) {
        res.push([pointer1, pointer2 - 1])
    }
    return res

};

// let str = "abbxxxxzzy"
// let str = "abcdddeeeeaabbbcd"
let str = "aa"
console.log(largeGroupPositions(str))