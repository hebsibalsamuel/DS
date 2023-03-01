// object method
//approach one
var romanToInt = function (s) {
	let obj = {
		"I": 1, "V": 5, 'X': 10, "L": 50, "C": 100, 'D': 500, 'M': 1000
	}	
	let sum = 0
	let i = 0
	while (i < s.length) {
		if(obj[s[i]] < obj[s[i+1]]){
			sum = sum + (obj[s[i+1]] - obj[s[i]])
			i=i+2
		}
		else{
			sum =sum + obj[s[i]]
			i++
		}
	}
	return sum;

};
//approach2
var romanToInt = function (s) {
	let obj = {
		"I": 1, "V": 5, 'X': 10, "L": 50, "C": 100, 'D': 500, 'M': 1000
	}
	let subObj = {
		"I": ['V', "X"],
		"X": ["L", "C"],
		"C": ['D', 'M']
	}
	let sum = 0
	let i = 0
	while (i < s.length) {
		if (s[i] == "I" || s[i] == "X" || s[i] == "C") {
			let ref = subObj[s[i]]
			if (ref.includes(s[i + 1]) && i <= s.length - 2) {
				sum = sum + (obj[s[i + 1]] - obj[s[i]])
				i = i + 2;
			}
			else {
				sum = sum + obj[s[i]]
				i++
			}

		}
		else {
			sum = sum + obj[s[i]]
			i++
		}
	}
	return sum;

};

let nums = "LVIII"
console.log(romanToInt(nums))