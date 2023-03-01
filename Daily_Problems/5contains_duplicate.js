//array problem - Set for removing dups
//set.size
var containsDuplicate = function(nums) {
    let numsSet = new Set(nums)
	console.log(numsSet)
    if(nums.length === numsSet.size) return false
    else return true
    
};
console.log(containsDuplicate([1,2,3,4]))