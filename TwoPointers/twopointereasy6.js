var removeTrailingZeros = function (num) {
    let pointer1 = 0;
    let pointer2 = 0;
    let res
    while (pointer2 < num.length) {
        let currVal = num[pointer2]
        if (currVal === '0') {
            pointer2++
        }
        else {
            pointer2++
            pointer1 = pointer2
        }
        if (num[pointer1]) {
            res = res + num[pointer1]
        }
    }
    return res
    // return num.slice(0, pointer1)

};


let num = "1720865079269529096765717822459"
// let num = "51230100"
console.log(removeTrailingZeros(num))