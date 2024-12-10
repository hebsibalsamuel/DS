// Dice problem
function diceNumberCombination(target) {
    let faces = 6
    let output = helper(target, "", faces)
    console.log(output)
}
function helper(input, output, faces) {
    let resArray = []
    if (input <= 0) {
        resArray.push(output)
        return resArray
    }
    // dice = [1,2,3,4,5,6]
    //the i should be less than the current target so add extra condition
    for (let i = 1; i <= faces && i <= input; i++) {
        let returnArray = helper(input - i, output + i, faces)
        resArray = [...resArray, ...returnArray]
    }
    return resArray
}

let target = 6
diceNumberCombination(target)

// Time complexity O(6^n) n is the target number