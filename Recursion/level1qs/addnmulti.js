
// let sum = 0
// function sumfun(no){
//     if(no===0){
//         return sum;
//     }
//     let curr = no % 10
//     sum+=curr;

// return sumfun(Math.round(no/10))
// }
// ==============================without a outer variable======================
function sumfun(no){
    if(no%10===no){
        return no;
    }
    let curr = no % 10
    let sum = curr + sumfun(Math.round(no/10))
return sum;
}
console.log(sumfun(1234))

function multifun(no){
    if(no%10===no){
        return no;
    }
    let curr = no % 10
    let prod = curr * multifun(Math.round(no/10))
return prod;
}
console.log(multifun(1234))
