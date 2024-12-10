//Linear search 
//only one value
function linearSearch(arr, target) {
    return helper(arr, target, 0)
}

function helper(arr, target, i) {
    if (i == arr.length) {
        return -1;
    }
    if (arr[i] == target) {
        return i
    }
    else {
        return helper(arr, target, i + 1)
    }
}
// search all values, using args
function linearSearchAll(arr, target) {
    let res = []
    return helperAll(arr, target, 0, res)
}

function helperAll(arr, target, i, res) {
    if (i == arr.length) {
        return res;
    }
    if (arr[i] == target) {
        res.push(i)
        return helperAll(arr, target, i + 1, res)
    }
    else {
        return helperAll(arr, target, i + 1, res)
    }
}
// console.log(linearSearchAll([1, 2, 4, 6, 2, 1, 7, 4], 4))

// search all values, without args
function linearSearchAll1(arr, target) {
    return helperAll1(arr, target, 0)
}
//when a variable in created in body new value is created for every function, we need to pass it with
//the return value to the top calls to preserve it
function helperAll1(arr, target, i) {
    let res = []
    if (i == arr.length) {
        return res;
    }
    if (arr[i] == target) {
        res.push(i)
        //holds the return value from bottom calls
        let newResult = helperAll1(arr, target, i + 1)
        // returning the value of both previous calls and current value
        return [...res, ...newResult]
        // return [...res, ...helperAll1(arr, target, i + 1)]
    }
    else {
        return helperAll1(arr, target, i + 1)
    }
}
console.log(linearSearchAll1([1, 2, 4, 6, 2, 1, 7, 4], 1))