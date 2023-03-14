
var compress1 = function(chars){
	var arr=[], count=1;
    //if(chars.length===1) return 1;
    for(var i=0; i< chars.length; i++){
        if(!arr.includes(chars[i])){arr.push(chars[i])}
        if(chars[i] != chars[i+1]){
            arr.push(count);
          count =1;
        }
        if(chars[i]==chars[i+1]){
            count++;
        }
    }
    return arr.length;
}
console.log(compress1(arr))
// 2 pointer approach

var compress = function (chars) {
	let pointer1 = 0
	let pointer2 = 1
	let count = 1
    // having <= condition is  ***** to handle the last elements
	while (pointer2 <= chars.length) {
		if (chars[pointer1] != chars[pointer2]) {			
			if (count > 1) {
				let countArr
				countArr = count.toString().split('')
				chars.splice(pointer1 + 1, count - 1, ...countArr)
				pointer1 = pointer1 + countArr.length + 1
				pointer2 = pointer1 + 1
				count = 1
			}
			else {
				pointer1++
				pointer2 = pointer1 +1 
			}			
		}		
		else {
			count += 1
			pointer2++			
		}
	}
    return chars.length
	// console.log(chars)	
};
let arr =
	// ["a"]
	// ['a','a']
	//  ["a", "b", "b", "b", "b", "b", "c", "c"]
["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]
// ["a","a","b","b","c"]

// console.log(compress(arr))