// string problem object as ref
//alternate approach - optimised instead of creating a new object decrement the count in existing object
var isAnagram = function(s, t) {
	let objS = {}
	if (s.length !== t.length) return false;
	for(let i=0;i<s.length;i++){
		objS[s[i]] = (objS[s[i]] || 0) + 1 
	}
	for(let j=0;j<t.length;j++){
        if(objS[t[j]]>0){
            objS[s[j]] = objS[s[j]]--
        }
        else return false
	}	
   return true 
};
// approach 1
var isAnagram = function(s, t) {
	let objS = {}
	if (s.length !== t.length) return false;
	for(let i=0;i<s.length;i++){
		objS[s[i]] = (objS[s[i]] || 0) + 1 
	}
	for(let j=0;j<t.length;j++){
        if(objS[t[i]]>0){
            objS[s[i]] = objS[s[i]]-1
        }
        else return false
		// objT[t[j]] = (objT[t[j]] || 0) + 1
	}	
	// for(key in objS){
	// 	if(objS[key] !== objT[key]){
	// 		return false
	// 	}

	// }
   return true 
};
let  
// s = "rat", t = "car"
s = "anagram", t = "nagaram"
console.log(isAnagram(s,t))