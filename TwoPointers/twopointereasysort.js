// Input: nums = [-4,-1,0,3,10]
// // Output: [0,1,9,16,100]
// var sortedSquares = function(nums) {
//     for(let i=0; i<nums.length; i++){
//         nums[i]*=nums[i]
//     }
//     for(let i=0 ; i<nums.length ; i++){
//         for(let j=i+1; j<nums.length; j++){
//             if (nums[i]>nums[j]){
//                [ nums[i],nums[j]] =  [nums[j],nums[i]]
//             }
//         }
//     }
//     return nums;
    
// };
// not sure how o(n) works
var sortedSquares = function(nums) {
    // use two pointers
    // create a new array
    const result = new Array(nums.length);
    let left = 0, 
        right = nums.length - 1;
    
	// don't want to rearrange the array, so iterating the array in descending order 
    for (let i = nums.length - 1; i >= 0; i--) {
        if (Math.abs(nums[left]) < Math.abs(nums[right])) {
            result[i] = nums[right] ** 2
            right--;
        } else {
            result[i] = nums[left] ** 2
            left++;
        }
    }
    
    return result;
};
console.log(sortedSquares([-4,-1,0,3,10]))