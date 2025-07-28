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

// More easy approach
var countGoodSubstrings = function (s) {
    let count = 0;

    // Loop through the string, only until the third last character
    for (let i = 0; i <= s.length - 3; i++) {
        const substr = s.slice(i, i + 3); // Get substring of length 3
        const set = new Set(substr);     // Create a set to check uniqueness

        // If all characters are unique, the set size will be 3
        if (set.size === 3) {
            count++;
        }
    }

    return count;
};

// Without set and slice
var countGoodSubstrings = function (s) {
    let count = 0;

    for (let i = 0; i <= s.length - 3; i++) {
        // Extract the 3 characters manually
        const a = s[i];
        const b = s[i + 1];
        const c = s[i + 2];

        // Check if all 3 characters are different
        if (a !== b && b !== c && a !== c) {
            count++;
        }
    }

    return count;
};
