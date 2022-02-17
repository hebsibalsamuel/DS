// 448. Find All Numbers Disappeared in an Array
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
function cyclicSortMissingNumbers(nums){
    let index=[];
    let newIndex=0;
    for(let i=0;i<nums.length;i++){
        newIndex = (nums[i]-1)         
        while(nums[i]<=nums.length && nums[i]!==nums[newIndex]){                
            [nums[i],nums[newIndex]] =  [nums[newIndex],nums[i]]
            newIndex = nums[i] -1 
        }
    }
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==i+1){
           index.push(i+1)
        }   
    }
return index;
}
console.log(cyclicSortMissingNumbers([4,3,2,7,8,2,3,1]))