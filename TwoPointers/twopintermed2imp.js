            //    01234567
// Input: s = "abcabcbb" "bbbbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

//consecutive string with unknown window size

var lengthOfLongestSubstring = function (s) {
    let windowStart = 0
    let checker = {}
    let maxWindow = 0
    let windowEnd
    for (windowEnd = 0; windowEnd <= s.length - 1; windowEnd++) { 
        // easy way of initialisation
        checker[s[windowEnd]] = (checker[s[windowEnd]]|| 0) + 1

            while (checker[s[windowEnd]] > 1) {
                if (s[windowStart] === s[windowEnd]) {
                    checker[s[windowEnd]] = checker[s[windowEnd]]-1
                  // I should not delete bcoz in future I'm having one element
                    
                    // delete checker[s[windowEnd]]; 
                    // windowStart++;
                }
                // added for 3rd case deleting the unused charaters of the past before moving on
                //ex : deleting our past memory is important before moving on
                else if(checker[s[windowStart]] === 1){
                    delete checker[s[windowStart]]  
                }
                // in both if and else part have to move the start pointer
                windowStart++;
               
            }
            maxWindow = Math.max(maxWindow, (windowEnd - windowStart)+1)

        // }
    }
    return Math.max(maxWindow, windowEnd - windowStart);
};
// console.log(lengthOfLongestSubstring("abcabcbb"))
// console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("tmmzuxt")) // 5