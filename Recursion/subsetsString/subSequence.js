//subsequences
//approach1 using params
function subsequences(str) {
    // let res =[]
  return  helper('', str)

}
function helper(up, p) {
    if(p===''){
        console.log(up)
        return;
    }
    let curr = p[0]
    let next = p.substring(1)
    helper(up, next)
    helper(up + curr, next)

}

// console.log(subsequences('abc'))

function subsequences1(str) {
    // let res =[]
  return  helper1('', str)

}
function helper1(up, p) {
    if(p===''){
        // console.log(up)
        let arr = []
        if(up!='')
        {
            arr.push(up)
        }
        return arr;
    }
    let curr = p[0]
    let next = p.substring(1)
    let left = helper1(up, next)
    let right = helper1(up + curr, next)
    console.log(left,right)
    return [...left,...right]

}

console.log(subsequences1('abc'))