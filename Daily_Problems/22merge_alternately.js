// easy looping problem
var mergeAlternately = function(word1, word2) {
	let merged=""
	let i=0
	while(i<word1.length && i<word2.length){
		merged += word1[i]
		merged += word2[i]
		i++
	}	
	if(word1.length > word2.length){
		merged+= word1.substr(i)
	}
	else if(word2.length > word1.length){
		merged+= word2.substr(i)
	}
	return merged
    
};
let word1 = "abcd", word2 = "pq"
// word1 = "abc", word2 = "pqr"
console.log(mergeAlternately(word1,word2))