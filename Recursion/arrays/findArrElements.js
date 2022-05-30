
function findInArray(arr,target){
    return helper(arr,target,0)
 }
 
 function helper(arr,target,i){
     if(arr.length==i){
         return -1
     }
     if(arr[i]===target){
         return i
     }
     return helper(arr,target,i+1)
 }
 
 console.log("Hello",findInArray([3,5,3,6,7,9],6))
 
 function findAllInArray(arr,target){
     return helperAll(arr,target,0,[])
  }
  
  function helperAll(arr,target,i,res){
      if(arr.length==i){
          return res
      }
      if(arr[i]===target){
          res.push(i)
          return helperAll(arr,target,i+1,res)
      }
      return helperAll(arr,target,i+1,res)
  }
  console.log("HelloAll",findAllInArray([3,5,3,6,7,9],3))
 