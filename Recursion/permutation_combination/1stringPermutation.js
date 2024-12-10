function permutation(str) {
    console.log(helper(str, ""))
}

function helper(input, output) {
    let res = []
    if (input === "") {
        //returning as array since the outside value is returned as array
        res.push(output)
        return res
    }
    let currentChar = input[0]
    for (let i = 0; i <= output.length; i++) {
        //<= since no of iterations is string characters plus one.
        //ex: ab string has 3 possibilities - _ab/a_b/ab_
        //use substring/slice
        let newOutput = output.substring(0, i) + currentChar + output.substring(i)
        let returnOutput = helper(input.substring(1), newOutput)
        //combining 2 arrays together        
        res = [...res, ...returnOutput]
    }
    return res

}

let input = 'abc'
permutation(input)