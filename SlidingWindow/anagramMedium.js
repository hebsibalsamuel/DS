// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

var groupAnagrams = function(strs) {
    /* sort each string, use that as key in map and when new sorted string matches a key we add it to that */
    const map = {};
    
    for (const str of strs) {
        const sorted = str.split('').sort().join('');
        
        if (!map[sorted]) {
            map[sorted] = [str];
        } else {
            map[sorted].push(str);
        }
    }
    console.log(map)
    
    return Object.values(map);
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))