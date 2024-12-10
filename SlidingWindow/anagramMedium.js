// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Complexity

// Time complexity:
// Sorting each word takes O(k log k) time, where k is the maximum length of a word in the input array. We do this for each word, so the overall time complexity is O(n * k log k), where n is the number of words in the input array.
// Space complexity:
// We use a Map data structure to store anagrams, which can take up to O(n) space, where n is the number of words in the input array. Additionally, 
// the output array containing groups of anagrams also takes up space, which is O(n) in the worst case. Hence, the overall space complexity is O(n).
// This code efficiently groups anagrams together and has a time complexity 
// of O(n * k log k) and a space complexity of O(n), where n is the number of words 
// in the input array and k is the maximum length of a word.

var groupAnagrams = function (strs) {
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

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))