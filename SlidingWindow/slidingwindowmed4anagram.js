// Input: s = "abab", p = "ab"
// Output: [0,1,2]
// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]

var findAnagrams = function (s, p) {
    let indexes = []
    let sref = {}
    let pref = {}
    let plen = p.length;
    let slen = 0;
    for (let i = 0; i < p.length; i++) {
        pref[p[i]] = (pref[p[i]] || 0) + 1
    }
    for (let i = 0; i < s.length; i++) {
        if (s[i] in pref) {
            sref[s[i]] = (sref[s[i]] || 0) + 1
            slen += 1

            while (sref[s[i]] > pref[s[i]]) {
                //length-1 of string to get the index value
                sref[s[i - --slen]] -= 1
                // sref[s[i - (slen-1)]]  -=1  //similar code
                // slen-=1
            }

            if (slen === plen) {
                indexes.push(i - (slen - 1))
            }

        }
        else {
            sref = {}
            slen = 0
        }

    }
    return indexes;
};

// console.log(findAnagrams("abab", "ab"))
console.log(findAnagrams("cbaebabacd", "abc"))

//new approach
var findAnagrams = function (s, p) {
    let indexes = []
    let sref = {}
    let pref = {}
    let plen = p.length;

    for (let i = 0; i < p.length; i++) {
        pref[p[i]] = (pref[p[i]] || 0) + 1
    }
    let p1 = 0
    let p2 = 0
    let tempStr = "";
    while (p2 < s.length) {
        if (s[p2] in pref) {
            sref[s[p2]] = (sref[s[p2]] || 0) + 1
            tempStr += s[p2]

            while (sref[s[p2]] > pref[s[p2]]) {
                sref[s[p1]] = sref[s[p1]] - 1
                p1++
                tempStr = tempStr.substring(1)
            }

            if (tempStr.length === plen) {
                indexes.push(p2 - (plen - 1))
            }

            p2++

        }
        else {
            sref = {}
            tempStr = ""
            //skip the character that's causing issue and move to next character and move p1 to that
            //same character as initial assumption p1=0 and p2=0
            p2++
            p1 = p2
        }
    }

    return indexes;
}

// console.log(findAnagrams("abab", "ab"))
console.log(findAnagrams("cbaebabacd", "abc"))