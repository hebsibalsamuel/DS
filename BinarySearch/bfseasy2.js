
var searchInsert = function (nums, target) {

    let start = 0;
    let end = nums.length - 1
    let mid
    while (start <= end) {
        // Important to calculate mid here... when target is not found try to 
        // return either start or end bcoz they 2 only have constant positions 
        // that is start will come after end on violation
        mid = Math.floor(start + (end - start) / 2)
        if (nums[mid] === target) {
            return mid;
        }
        else if (target > nums[mid]) {
            // mid = Math.floor(start + (end - start) / 2) not here
            start = mid + 1
        }
        else {
            // mid = Math.floor(start + (end - start) / 2)
            end = mid - 1
        }
    }
    return start;   
};


console.log(searchInsert([1, 2, 4, 5, 7], 8

))