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