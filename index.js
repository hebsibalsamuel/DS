//Linear search

function linearSearch(arr,target){
   return helper(arr,target,0)
}

function helper(arr,target,i){
    if(i==arr.length){
        return -1;
    }
    if(arr[i]==target){
        return i
    }
    else{
       return helper(arr,target,i+1)
    }
}
console.log(linearSearch([1,2,4,6,2,1,7,4],4))