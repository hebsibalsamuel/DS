//array logical o(n) with constant space
var sortArrayByParity = function(nums) {
    let pointer1 = 0
    let pointer2 = 1
    while(pointer2<nums.length){
        if(nums[pointer1]%2 === 0){
            pointer1++
            pointer2++
        }
        else{
            if(nums[pointer2]%2 === 0){
                [nums[pointer1],nums[pointer2]] = [nums[pointer2],nums[pointer1]]
                pointer1++
                pointer2++
            }
            else{
                pointer2++
            }
        }
    }
    return nums
        
    };
    let arr =
    [0]
    // [1,2,3,4] 
    // [3,1,2,4]
    console.log(sortArrayByParity(arr))