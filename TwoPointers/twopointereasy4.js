// https://leetcode.com/problems/two-sum/description/
// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
//scaler video
// this approach works if the array is sorted.
var twoSum = function (numbers, target) {

    let start = 0;
    let end = numbers.length - 1

    while (start < end) {
        let sum = numbers[start] + numbers[end];
        if (sum === target) {
            return [start + 1, end + 1]
        }
        else if (sum > target) {
            end--
        }
        else {
            start++
        }

    }

};
console.log(twoSum([2, 7, 11, 15], 9))
// for unsorted array
var twoSum = function (nums, target) {
    let obj = {}
    let result = []
    let balanceNum

    nums.forEach((num, i) => {
        if (num in obj) {
            result.push(obj[num])
            result.push(i)
        }
        else {
            balanceNum = target - num
            obj[balanceNum] = i
        }
    })
    return result;
};