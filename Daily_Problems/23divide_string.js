// easy looping problem
// string problem
var divideString = function (s, k, fill) {
	let arr = []
	let str = ""
	for (let i = 0; i < s.length; i++) {
		// slice returns string alone
		// result.push(s.slice(i,i+k))
		if (str.length < k) {
			str += s[i]
		}
		else {
			arr.push(str)
			str = s[i]
		}
	}
	while (str.length <= k) {
		if (str.length === k) {
			arr.push(str)
			return arr
		}
		str += fill
	}
	return arr
};
//approach2
var divideString2 = function (s, k, fill) {
	let arr = []
	let str = ""
	for (let i = 0; i < s.length; i++) {
		// slice returns string alone
		// result.push(s.slice(i,i+k))
		if (str.length < k) {
			str += s[i]
		}
		else {
			arr.push(str)
			str = s[i]
		}
	}
    if (str.length > 0) {
		str += fill.repeat(k - str.length)
		arr.push(str)
	}
	return arr
}
let s = "abcdefghi", k = 3, fill = "x"
// s = "abcdefghij", k = 3, fill = "x"
console.log(divideString(s, k, fill))