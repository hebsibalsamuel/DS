
// use IN OBJ property to check if a key is present
var findDisappearedNumbers = function(nums) {
    let obj = {}
    let arr = []
    
    for(let i=0;i<nums.length;i++){
        obj[nums[i]] = (obj[nums[i]] || 0) + 1
    }
    let start = 1
    while(start<=nums.length){
        if(!(start in obj)){
            arr.push(start)
        }
        start++
    }
    return arr    
    };
    
    let nums = 
    [1,1]
    // [4,3,2,7,8,2,3,1]
    console.log(findDisappearedNumbers(nums))