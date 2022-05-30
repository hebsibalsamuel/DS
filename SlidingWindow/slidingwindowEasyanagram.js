// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true

function validAnagram(s, t) {
    let sref = {}
    let tref = {}
    let valid = true
    if (s.length !== t.length) return false;
    for (let char of s)
        sref[char] = (sref[char] || 0) + 1

    for (let char of t)
        tref[char] = (tref[char] || 0) + 1

    for (let key in sref) {
        if (sref[key] !== tref[key])
            return false;
    }
    return valid;
}

console.log(validAnagram('anagram', 'nagaram'))
console.log(validAnagram('rat', 'cat'))