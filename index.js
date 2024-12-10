let arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5]
let obj = {} B
function hello(arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = (obj[arr[i]] || 0) + 1
        if (obj[arr[i]] <= 2) {
            res.push(arr[i])
        }
    }
    return res;
}
console.log(hello(arr))



