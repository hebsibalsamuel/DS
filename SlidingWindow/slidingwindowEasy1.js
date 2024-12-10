// s = "xyzzaz"
// Output: 1
// There are 4 substrings of size 3: "xyz", "yzz", "zza", and "zaz". 
// The only good substring of length 3 is "xyz".

// Input: s = "aababcabc"
// Output: 4
// Explanation: There are 7 substrings of size 3: "aab", "aba", "bab", "abc", "bca", "cab", and "abc".
// The good substrings are "abc", "bca", "cab", and "abc".
var countGoodSubstrings = function (s) {
    let strstart = 0
    let strend = 0
    let Output = 0
    const strlength = 3
    let obj = {}
    while (strend < strlength) {
        obj[s[strend]] = (obj[s[strend]] || 0) + 1
        strend++
    }
    // aababcabc  "abc", "bca", "cab", and "abc".
    for (strend = strlength; strend <= s.length; strend++) {
        if (Object.keys(obj).length >= strlength) {
            Output += 1
        }
        obj[s[strstart]] = obj[s[strstart]] - 1
        if (obj[s[strstart]] === 0)
            delete obj[s[strstart]]
        strstart++;
        obj[s[strend]] = (obj[s[strend]] || 0) + 1

    }
    return Output;

};
console.log(countGoodSubstrings('aababcabc'))

//easy approach
var countGoodSubstrings = function (s) {
    let p1 = 0
    let p2 = 0
    const strlength = 3
    let goodStrings = 0
    let obj = {}
    let tempStr = ''
    while (p2 < s.length) {
        obj[s[p2]] = (obj[s[p2]] || 0) + 1
        tempStr = tempStr + s[p2]
        if (obj[s[p2]] !== 1) {
            while (obj[s[p2]] > 1) {
                obj[s[p1]] = obj[s[p1]] - 1
                if (obj[s[p1]] === 0) delete obj[s[p1]]
                p1++
                tempStr = tempStr.substring(1)
            }
        }
        if (tempStr.length === strlength) {
            goodStrings += 1
        }
        p2++

    }
    console.log(goodStrings)
    return goodStrings

};
console.log(countGoodSubstrings('xyzzaz'))
console.log(countGoodSubstrings('aababcabc'))