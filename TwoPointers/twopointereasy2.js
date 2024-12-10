// Input: words = ["abc","car","ada","racecar","cool"]
// Output: "ada"
// var firstPalindrome = function (words) {
//     let foundPalindrome = false
//     let palindrome = '';
//     let length = words.length
//     while (!foundPalindrome) {
//         for (let i = 0; i < length; i++) {
//             let original = words[i]
//             let start = 0
//             let end = words[i].length - 1
//             let swap = words[i].split('')
//             while (start < end) {
//             //    swap= words[i].split('')
//                 [swap[start],swap[end]] =  [swap[end],swap[start]]               
//                 start++;
//                 end--;
//             }
//             if(swap.join('')===original){
//                 foundPalindrome = true
//                 palindrome = words[i]
//                 break;

//             }
//         }
//     }
//     return palindrome;

// };
// console.log(firstPalindrome(["abc","car","ada","racecar","cool"]))


//approach2 using 2 pointers
// // Input: words = ["abc","car","ada","racecar","cool"]
// // Output: "ada"
var firstPalindrome = function (words) {
    let palindrome
    let found = false
    for (let word of words) {
        let pointer1 = 0
        let pointer2 = word.length - 1
        while (pointer1 <= pointer2) {
            if (word[pointer1] === word[pointer2]) {
                pointer1++
                pointer2--
                //both pointers reached middle of the string without reaching break case
                if (pointer1 === pointer2) {
                    palindrome = word
                    found = true
                }
            }
            else {
                break;
            }
        }
        if (found)
            return palindrome

    }

    return null;

};
console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"]))

