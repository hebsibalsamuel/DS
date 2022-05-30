//count zeros

// counting zeros with no outer varaibles
function count(no) {
    let count = 0
    //use helper function if any new args need to be passed
    return helper(no, count)
}

function helper(no, count) {
    if (no == 0) {
        // %%%%%%%%%%% return arg here %%%%%%%%%%%%%
        return count;
    }
    let curr = Math.round(no % 10)
    if (curr == 0) {
        return helper(Math.round(no / 10), count + 1)
    }
    else {
        return helper(Math.round(no / 10), count)
    }
}
// counting zeros inside the body of the function
function count1(no){
    if (no == 0) {
        // returning zero will not affect bcoz it's addition 
        // for return; NaN would be the result (1+undefined=NAN)
        return 0;
    }
    let curr = Math.round(no % 10)
    let count = 0
    if (curr == 0) {
        count+=1
        return count + count1(Math.round(no / 10))
    }
    else {
        return count1(Math.round(no / 10))
    }

}

console.log(count1(10040018))