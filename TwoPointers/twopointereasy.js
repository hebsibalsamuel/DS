//approach1 

// var moveZeroes = function (nums) {
// 	let start = 0;
// 	let end = 0
// 	let length = nums.length - 1;
// 	while (end <= length) {
// 		if (nums[end] != 0) {
// 			nums[start] = nums[end]
// 			start++
// 		}
// 		end++
// 	}
// 	while (start <= length) {
// 		nums[start++] = 0

// 	}
// 	return nums;
// };
// approach 2
const moveZeroes = (arr) => {
    let pointer1 = 0
    let pointer2 = 1
    while (pointer2 < arr.length) {
        if (arr[pointer1] === 0) {
            if (arr[pointer2] !== 0) {
                [arr[pointer1], arr[pointer2]] = [arr[pointer2], arr[pointer1]]
                pointer1++
            }
            pointer2++

        }
        else {
            pointer1++
            pointer2++

        }
    }
    return arr

}
// let s = [0, 1, 0, 3, 12]
// let s = [0]
// let s = [0, 0, 0]
// let s = [1, 2, 3, 4]
let s = [-1, 0, -2, -3, 0]
console.log(moveZeroes(s))