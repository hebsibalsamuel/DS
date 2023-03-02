// two pointer approach
// vv*** The reverse problems should have swapping of left and right
// In this problems swap only if the left and right are vowels
var reverseVowels = function (str) {
	let s = str.split('')
	let ref = {
		'a': 1,
		'e': 1,
		'i': 1,
		'o': 1,
		'u': 1,
		'A': 1,
		'E': 1,
		'I': 1,
		'O': 1,
		'U': 1
	}
	let left = 0, right= s.length-1
	
	while(left<right){
		if(ref[s[left]] && ref[s[right]]){
			[s[left],s[right]] = [s[right],s[left]]
			left++
			right--
		}
		else if(!ref[s[left]]){
			left++
		}
		else if(!ref[s[right]]){
			right--
		}

	}
	return s.join('')
};
var reverseVowels1 = function (str) {
	let s = str.split('')
	let ref = {
		'a': 1,
		'e': 1,
		'i': 2,
		'o': 3,
		'u': 4,
		'A': 5,
		'E': 6,
		'I': 7,
		'O': 8,
		'U': 9
	}
	let obj = {}
	let vowelChars = []
	for (let i = 0; i < s.length; i++) {
		if (ref[s[i]]) {
			vowelChars.push(s[i])
			obj[i] = s[i]
		}
	}
	if (Object.keys(obj).length > 0) {
		let vowelsPosition = Object.keys(obj)
		for (let i = 0; i < vowelsPosition.length; i++) {
			s[vowelsPosition[i]] = vowelChars.pop()

		}
	}
	return s.join('')

};

let s =
"ai"
// "hello"
	// "leetcode"
console.log(reverseVowels(s))