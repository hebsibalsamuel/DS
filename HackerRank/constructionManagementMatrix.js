

function printnos(no){
    let arr=[]
    for(let i=0;i<no.length;i++){
        for(let j=0;j<no[i].length;j++){
            if(i==0){
                arr[j]=no[i][j]
            }
            else{
                arr[j]= Math.min(arr[j],no[i][j])
            }


        } 
    }
let sum = arr.reduce((acc,curr)=>{
    acc+=curr
    return acc;

},0)
    console.log(sum)
}
printnos([[1,2,2],
          [2,2,1],
          [2,1,2]])
printnos([[1,2,3],
            [1,2,3],
            [3,3,1]])




