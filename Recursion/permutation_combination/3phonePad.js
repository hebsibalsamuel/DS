// https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
var letterCombinations = function (digits) {
    let phoneMap = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }
    return helper(digits, '', phoneMap)
};
function helper(input, output, phoneMap) {
    let resArray = []
    if (input === "") {
        resArray.push(output)
        return resArray
    }
    let current = input[0]
    for (let i = 0; i < phoneMap[current].length; i++) {
        let returnArray = helper(input.substring(1), output + phoneMap[current][i], phoneMap)
        resArray = [...resArray, ...returnArray]
    }
    return resArray
}
let digits = '23'
letterCombinations(digits)

// Overall Time Complexity:
// Let n be the length of the input string (number of digits).
// Let m be the average number of letters corresponding to each digit.
// This is because, for each digit, there are m choices (letters), and there are n digits in total,
// leading to m n possible combinations.O(m^n)