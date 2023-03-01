// string problems
var isValid = function (strs) {
	const obj = {
		'(': ')',
		'[': ']',
		'{': '}'
	}
	let stack = []
	for (let ch of strs) {
		if (ch in obj) {
			stack.push(ch)
		}
		else {
			let poppedVal = stack.pop()
			if (obj[poppedVal] !== ch) {
				return false
			}
		}
	}
	// handling "((" "("
	if (stack.length > 0) return false
	return true

}

var strs =
	"({})"

console.log(isValid(strs))