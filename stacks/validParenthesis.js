// https://leetcode.com/problems/valid-parentheses/submissions/902953031/
function isValidBrackets(brackets) {
    const obj = {
        '{': '}',
        '[': ']',
        '(': ')'
    }
    let matchedItems = []
    for (brack of brackets) {
        if (brack in obj) {
            matchedItems.push(brack)
        }
        else if (matchedItems.length >= 1) {
            const lastItem = matchedItems.pop()
            if (obj[lastItem] !== brack)
                return "not valid"
        }
    }
    console.log(matchedItems)
    if (matchedItems.length === 0) return "valid";

}
let b1 = '[{()}]'
let b2 = '[{(}]'
let b3 = '[{)(}]'
console.log(isValidBrackets(b3))