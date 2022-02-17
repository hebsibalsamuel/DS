// input : [4,3,2,1,6]
// cyclic sort // O(N) complexity only
//can be used in 1 to N numbers only
function cyclicSort(nums){
    for(let i=0;i<nums.length-1;i++){
        while(nums[i]!==i+1){
            [nums[i],nums[nums[i+1]]] =  [nums[nums[i+1]],nums[i]]
        }
    }
return nums;
}
// better way of handling since same notation is used everywhere
function cyclicSortOtherway(nums){
    for(let i=0;i<nums.length-1;i++){
        let realIndex = nums[i+1]
        while(nums[i]!==nums[realIndex]){
            [nums[i],nums[realIndex]]=  [nums[realIndex],nums[i]]
            realIndex = nums[i+1]
        }
    }
return nums;
}
console.log(cyclicSort( [4,3,2,1,6]))

