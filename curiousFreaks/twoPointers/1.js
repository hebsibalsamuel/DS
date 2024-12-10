
// https://www.geeksforgeeks.org/problems/key-pair5616/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=bottom_sticky_on_article
const hasArrayTwoCandidates = (arr, n, k) => {
    let obj = {}
    let Output = "No"
    for (let i = 0; i < n; i++) {
        if (obj[arr[i]]) {
            Output = "Yes"
        }
        else {
            let remaining = arr[i] - k
            obj[remaining] = i
        }

    }
    return Output

}
let arr = [1, 4, 45, 6, 10, 8]
let n = 6
k = 16
hasArrayTwoCandidates(arr, n, k)

// class Solution {
//     hasArrayTwoCandidates(arr,n,x){
//  let obj = {}
//     let Output = false
//     for (let i = 0; i < n; i++) {
//         if (obj[arr[i]]) {
//             Output = true
//             return Output
//         }
//         else {
//             let remaining = x - arr[i]
//             obj[remaining] = arr[i]
//         }

//     }
//     return Output   
//     }
// }