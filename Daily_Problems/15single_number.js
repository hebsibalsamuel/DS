// optimised option without sorting
// different object usage *******
var singleNumber2 = function(nums) {
	let obj ={}
	for(num of nums){
		console.log(obj)
		obj[num] ? delete obj[num] : obj[num] = 1
	}
	return Object.keys(obj)[0]
}
// array methods indexOf and lastIndexOf
var singleNumber = function(nums) {
	for(let i=0; i<nums.length;i++){
		if(nums.indexOf(nums[i])=== nums.lastIndexOf(nums[i])){
			return nums[i]
		}
	}
}

var singleNumber1 = function(nums) {
	nums= nums.sort((a,b)=>a-b)
	console.log(nums)
	// ======================aproach1
	// let i=0
	// while(i<nums.length){
	// 	if(nums[i]!=nums[i+1] || i===nums.length-1){
	// 		return nums[i]
	// 	}
	// 	i=i+2
	// }
	// =====================approach 2 
	// i+2 didn't work
	// for(let i=0;i<nums.length;i+=2){
	// 	if(nums[i]!=nums[i+1] || i===nums.length-1){
	// 		return nums[i]
	// 	}
	// }
    
};

let nums = 
[1]
// [4,1,2,1,2]
// [2,2,1]
console.log(singleNumber(nums))