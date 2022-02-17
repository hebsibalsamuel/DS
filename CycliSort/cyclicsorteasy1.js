// https://leetcode.com/problems/missing-number/submissions/
function cyclicSortMissingNumber(nums){
    let index;
    let newIndex=0;
    for(let i=0;i<nums.length;i++){
        newIndex = nums[i]
        // I have to swap only the numbers which has placeholder, 
        // the [1,4,0,2] 4 will not have placeholder bcoz the max index is 3 only
        // so add it in the while loop itself

        // if(nums[i]===nums.length){
        //     continue; // I tried this instead of while
        // }       
        while(nums[i]<nums.length && nums[i]!==i){                
            [nums[i],nums[newIndex]] =  [nums[newIndex],nums[i]]
            newIndex = nums[i]  
        }
    }
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==i){
            index = i;
           return index
        }   
    }
return nums.length;
}
console.log(cyclicSortMissingNumber( [1,4,0,2]))