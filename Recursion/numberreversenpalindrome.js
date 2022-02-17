// Approach1 using to String and concatenate
function reverse(no) {
    if (no % 10 === no) {
        return no.toString();
    }
    let curr = no % 10
    let res = curr.toString() + reverse(Math.round(no / 10))
    return Number(res);
}
// console.log(reverse(1234))

// ==================palindrome====================
function checkPalindrome(no) {
    if (reverse(no) === no) {
        console.log("palindrome")
    }
    else {
        console.log("Not a palindrome")
    }
}
checkPalindrome(1441)