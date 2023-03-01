//array problem 
// two pointer solution with o(n) solution
var removeDuplicates = function (nums) {
	let currentVal = nums[0]
	let pointer1 = 1
	let pointer2 = 1
	for (let num of nums) {
		if (num != currentVal) {
			currentVal = num
			nums[pointer1] = currentVal
			pointer1++
			pointer2++
		}
		else{
			pointer2++
		}
	}
	// console.log(nums,pointer1,pointer2)
	return pointer1;

};
let arr = [0,0,1,1,1,2,2,3,3,4]
// [1, 1, 2]
console.log(removeDuplicates(arr))