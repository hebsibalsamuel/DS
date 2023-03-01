//string problem - substring method
var longestCommonPrefix = function(strs) {
	let prefix = strs[0]
	for(let i=1;i<strs.length;i++){
		let currentString = strs[i]
		let stringMismatch = false
		for(let j=0;j<currentString.length;j++){
			if(currentString[j] !== prefix[j]){
				prefix = prefix.substring(0,j)
				stringMismatch = true
				break;
			}			
		}
        // to handle ['dog','dog','do'] scenarios where the 3rd string matched and the prefix
        // would still remain 'dog'
		if(!stringMismatch && prefix.length> currentString.length){
			prefix = currentString
		}
	}
	console.log(prefix)
	let res  = prefix ? prefix : ""
	return res    
};