
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