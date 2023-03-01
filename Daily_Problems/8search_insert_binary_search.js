// You must write an algorithm with O(log n) runtime complexity.
// Binary search Kunal video
//kind of 2 pointer approach
var searchInsert = function (nums, target) {
	let start = 0
	let end = nums.length - 1
	let mid
	// start<=end condition is important only then start will come after end position
	while (start <= end) {
		mid = parseInt(start + (end - start) / 2)
		if (nums[mid] === target) {
			return mid
		}
		else if (target > nums[mid]) {
			start = mid + 1
		}
		else {
			end = mid - 1
		}
	}
	return start

};
// o(n) approach
// var searchInsert = function (nums, target) {
// 	for(let i=0;i<nums.length;i++){
// 		if(nums[i]> target ){
// 			return i
// 		}
// 	}
// return nums.length
// };


let nums = [1, 3, 5, 6], target = 7
console.log(searchInsert(nums, target))