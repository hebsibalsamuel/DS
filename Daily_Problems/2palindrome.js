//Number problem can be solved using recursion also
// string method also
var isPalindrome = function (x) {
	let xcopy = x
	let reverse
	console.log(x/10)
	if(x/10===0) return true
	if (x<0) return false
	while (x / 10 > 0) {		
		let lastDigit = x % 10
		if (reverse) {
			reverse = (reverse * 10) + lastDigit
		}
		else {
			reverse = lastDigit
		}
		x = parseInt(x / 10)
	}
	let res = (reverse === xcopy) ? true : false
	return res
};
console.log(isPalindrome(010))
// string to array
var isPalindrome = function(x) {
    if(x<0) return false;
    if(x.toString()===x.toString().split('').reverse().join('')) return true;
    return false;  
 }