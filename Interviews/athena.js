let s1 = "india";
//output = ndia
let s2 = "programming";
//output= ogram

// get a substring without any duplicates

function getLargestSubString(s){
let obj = {}
let subString =''
let start = 0
/* i=0 start =0 s[i]=i {i:0}
i=1 start =0 s[i]=n {i:0,n:1}
i=2 start =0 s[i]=d {i:0,n:1, d:2}
i=3 start =1 s[i]=i {i:3,n:1, d:2}
i=4 start =1 s[i]=a {i:3,n:1, d:2,a:4}
1-4 //ndia
max = end-start */
let max = 0
    for(let i=0;i<s.length;i++){  
     
    if(obj[s[i]] === undefined){
    obj[s[i]] = i
     /* console.log(s.substring(start,i)) */
    }
    else{   
      start = obj[s[i]] +1
      obj[s[i]] = i
      console.log(s.substring(start,i+1))

    }
     subString= 
     
     max = Math.max(max,i-start)
     /* console.log(i) */
    console.log(s.substring(start,i+1))


    }


}
console.log(getLargestSubString(s2))



