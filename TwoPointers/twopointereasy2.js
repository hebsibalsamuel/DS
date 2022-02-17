// Input: words = ["abc","car","ada","racecar","cool"]
// Output: "ada"
var firstPalindrome = function (words) {
    let foundPalindrome = false
    let palindrome = '';
    let length = words.length
    while (!foundPalindrome) {
        for (let i = 0; i < length; i++) {
            let original = words[i]
            let start = 0
            let end = words[i].length - 1
            let swap = words[i].split('')
            while (start < end) {
            //    swap= words[i].split('')
                [swap[start],swap[end]] =  [swap[end],swap[start]]               
                start++;
                end--;
            }
            if(swap.join('')===original){
                foundPalindrome = true
                palindrome = words[i]
                break;

            }
        }
    }
    return palindrome;

};
console.log(firstPalindrome(["abc","car","ada","racecar","cool"]))
