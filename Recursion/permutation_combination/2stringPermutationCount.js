function permutation(str) {
    console.log(helper(str, ""))
}

function helper(input, output) {
    if (input === "") {
        //adding one on every result
        return 1;
    }
    let currentChar = input[0]
    let count = 0
    for (let i = 0; i <= output.length; i++) {
        let newOutput = output.substring(0, i) + currentChar + output.substring(i)
        count = count + helper(input.substring(1), newOutput)
    }
    return count

}
// The time complexity of the permutation function is O(N^n) n is the length of the input string.

let input = 'abc'
permutation(input)