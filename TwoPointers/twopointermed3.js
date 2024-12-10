// var zeroFilledSubarray = function (nums) {
// 	let i = 0, j = 0, count = 0
//     while (j < nums.length) {
//         if (nums[j] == 0) {
//             j++
//             count += j - i 
//         }
//         else {
//             j++
//             i = j
//         }
//     }
//     return count
// };
// approach 2
//------------------------0-1-2-3-4-5-6-7-8-9--------
// no of combinations  = [0,0,0,2,0,0,0,0,0,0]
// -----------------------1-2-3---1-2-3-4-5-6---------
// no of combinations that can be achieved is equal to no of zeros

var zeroFilledSubarray = function (nums) {
    let i = 0, j = 0, count = 0
    while (j < nums.length) {
        if (nums[j] == 0) {
            //    count+=1 add 1 to get the length
            count = count + (j - i) + 1
            j++
        }
        else {
            j++
            i = j
        }
    }
    return count
};


let nums = [0, 0, 0, 2, 0, 0]
console.log(zeroFilledSubarray(nums))