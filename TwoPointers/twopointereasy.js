var moveZeroes = function(nums) {
    let start = 0;
    let end = 0
    let length = nums.length-1;
    while(end <= length){
        if(nums[end]!=0){
            nums[start] = nums[end]
            start++
        }
        end++
    }
    while(start <=length){
        nums[start++] = 0

    }
    return nums;    
};
console.log(moveZeroes([0]))