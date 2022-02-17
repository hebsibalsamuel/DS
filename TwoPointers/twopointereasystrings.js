// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"


var reverseWords = function (s) {
    let ip = s.split(" ")
    for (i = 0; i < ip.length; i++) {
        let start = 0
        let end = ip[i].length - 1
        let words = ip[i].split('')
        while (start < end) {
            [words[start], words[end]] = [words[end], words[start]]
            start++;
            end--;
        }
        ip[i] = words.join('')
    }
    return ip
};
// without builtin functions
var reverseWords1 = function(s) {
    let result = ''
    let word = ''
    
    for (let i = 0; i < s.length; i++) {
        let val = s[i]
        if (val !== ' ') { 
            word = val + word 
        }
        else {
            result += (word + val)
            word = ''
        }
    }
    
    return result += (word)
};
console.log(reverseWords("Let's take LeetCode contest"))