function arrayCheckSort(arr) {
    return helper(arr, 0)
}

function helper(arr, index) {
    let sorted = true
    if (index == arr.length-1) {
        return sorted;
    }
    if (arr[index] > arr[index + 1]) {
        sorted = false
    }
    //if the statement gets false then the helper will not call
    return sorted && helper(arr, index + 1)

    //another way
    // if (arr[index] > arr[index + 1]) {
    //     return false
    // }
    // return  helper(arr, index + 1)
}
console.log(arrayCheckSort([1, 4, 2, 7, 6]))
console.log(arrayCheckSort([1,2,6,10]))
console.log(arrayCheckSort([1,2,6,10,5]))

