// 442. Find All Duplicates in an Array
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]
var findDuplicates = function (nums) {
let nos =[]
    for (let i = 0; i < nums.length; i++) {
        let correctIndex = nums[i] - 1
        while ( nums[i] != nums[correctIndex]) {
            [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]]
            correctIndex = nums[i] -1
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]!= i+1){
            nos.push(nums[i])
        }
    }

    return nos;
};
console.log(findDuplicates([4,3,2,7,8,2,3,1]))