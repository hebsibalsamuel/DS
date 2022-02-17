var search = function (nums, target) {
    let start = 0,
        end = nums.length - 1,
        mid = Math.floor(start + (end - start) / 2);
    while (end >= start) {
        if (nums[mid] == target)
            return mid;
        else if (target > nums[mid]) {
            start = mid + 1
            mid = Math.floor(start + (end - start) / 2);
        }
        else {
            end = mid - 1
            mid = Math.floor(start + (end - start) / 2);

        }
    }
    return -1;
};
console.log(search([-9],
    9))