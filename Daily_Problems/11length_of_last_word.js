// string problem trim function
var lengthOfLastWord = function(s) {
	let words = s.trim().split(' ')
	return words[words.length-1].length    
};
let s = 
"   fly me   to   the moon  "
// "Hello World"
console.log(lengthOfLastWord(s))