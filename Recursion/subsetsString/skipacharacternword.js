
function skip(str, ch) {
    return helper(processed = '', str, ch)
}

function helper(processed, unprocessedstr, ch) {
    // processed is the result, unprocessed is the original string
    if (unprocessedstr == '') {
        return processed;
    }

    if (unprocessedstr[0] === ch) {
        return helper(processed, unprocessedstr.substring(1), ch)
    }
    else {
        // adding characters to result if character is not present
        let newProcessed = processed + unprocessedstr[0]
        return helper(newProcessed, unprocessedstr.substring(1), ch)
    }
}

console.log(skip('aagbja', 'a'))

//recent approach
// function skipAChar(str, char) {
//     let result = ''
//     return helper(str, char, 0, result)
// }
// function helper(str, char, index, result) {
//     if (index >= str.length) {
//         return result
//     }
//     if (str[index] === char) {
//         return helper(str, char, index + 1, result)

//     }
//     else {
//         let newString = result + str[index]
//         return helper(str, char, index + 1, newString)
//     }
// }


// having result in function body
// function skipAChar(str, char) {
//     return helper(str, char, 0)
// }
// function helper(str, char, index) {
//     let result = ''
//     if (index >= str.length) {
//         return result
//     }
//     if (str[index] === char) {
//         return helper(str, char, index + 1)

//     }
//     else {
//         let newString = result + str[index]
//         let bubbledValue = helper(str, char, index + 1)
//         return newString + bubbledValue
//     }

// }



// let inputStr = "aabaacccd"
// let skip = 'c'
// console.log(skipAChar(inputStr, skip))


function skipWord(str, ch) {
    return helper1(processed = '', str, ch)
}

function helper1(processed, unprocessedstr, ch) {
    // processed is the result, unprocessed is the original string
    if (unprocessedstr == '') {
        return processed;
    }

    if (unprocessedstr.startsWith(ch)) {
        return helper1(processed, unprocessedstr.substring(ch.length), ch)
    }
    else {
        // adding characters to result if character is not present
        let newProcessed = processed + unprocessedstr[0]
        return helper1(newProcessed, unprocessedstr.substring(1), ch)
    }
}

console.log(skipWord('aagbaahja', 'aah'))

// having result in function body recent approach
// function skipAWord(str, char) {
//     return helper(str, char, 0)
// }
// function helper(str, char, index) {
//     let result = ''
//     if (index >= str.length) {
//         return result
//     }
//     if (str.startsWith(char, index)) {
//         return helper(str, char, index + char.length)
//     }
//     else {
//         let newString = result + str[index]
//         let bubbledValue = helper(str, char, index + 1)
//         return newString + bubbledValue
//     }

// }

// //corner case when result contains aba

// let inputStr = "aabaababacccd"
// let skip = 'aba'
// console.log(skipAWord(inputStr, skip))