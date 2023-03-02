// sorting and o(n) 
var missingNumber = function(nums) {
	nums.sort((a,b)=>a-b)
	console.log(nums)
	let res = -1
	for(let i=0;i<nums.length;i++){
		if(i !== nums[i]){
			res = i;
			break;
		}

	}	
	return res===-1 ? nums.length : res	   
};
var missingNumber1 = function(nums) {
	let range = nums.length;
	let newArr = new Array(range+1).fill(-1)
	nums.forEach(num=>{
		newArr[num] = num
	})
	let res = newArr.findIndex(e=>e===-1)
	console.log(newArr, res)
	return res    
};

let nums = 
[1,2]
// [3,0,1]
// [9,6,4,2,3,5,7,0,1]
// [0,1]
console.log(missingNumber(nums))