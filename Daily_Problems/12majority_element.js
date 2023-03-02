// using map object o(n)
var majorityElement = function(nums) {
    let map = {}
    for(let item of nums){
        if(!map[item]) {
            map[item] = 1;
        } else {
            map[item]++;
        }
        if (map[item] >= nums.length/2) return item
    }
};
//approach 2
var majorityElement = function(nums) {
	let obj ={
		count:0,
		num:0
	}
	let ref = {}
	nums.forEach((num)=>{
		if(!ref[num]){
			ref[num] = 1
			if(obj.count < ref[num]){
				obj.count = 1
				obj.num = num
			}
		}
		else{
			ref[num] = ref[num]+1
			if(obj.count < ref[num]){
				obj.count = ref[num]
				obj.num = num
			}
		}
	})
	return obj.num
    
};


let nums = 
[0]
// [2,2,1,1,1,2,2]
// [3,2,3]
console.log(majorityElement(nums))