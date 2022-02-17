// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// need to change it to 2 pointer
var rotate = function (nums, k) {
    let newArr = [...nums];
    // while (k > nums.length) {
    //     k = k - nums.length
    // }
    // ===================better way===========
    k = k % nums.length
    for (let i = 0; i < nums.length; i++) {
        let newIndex = i + k;
        // if (newIndex >= nums.length) {
        //     newIndex -= nums.length
        // }
        // ===================better way===========
        newIndex = newIndex % nums.length
        newArr[newIndex] = nums[i]
    }
    nums.splice(0, nums.length, ...newArr)
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotate([-1, -100, 3, 99], 2));