// Input: s = "abab", p = "ab"
// Output: [0,1,2]
// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]

var findAnagrams = function (s, p) {
    let indexes = []
    let sref = {}
    let pref = {}
    let plen = p.length;
    let slen = 0;
    for (let i = 0; i < p.length; i++) {
        pref[p[i]] = (pref[p[i]] || 0) + 1
    }
    for (let i = 0; i < s.length; i++) {
        if(s[i] in pref){
            sref[s[i]] = (sref[s[i]] || 0) + 1
            slen +=1

            while(sref[s[i]] > pref[s[i]]){
                sref[s[i - --slen]]  -=1 
                // sref[s[i - (slen-1)]]  -=1  //similar code
                // slen-=1
            }

            if(slen === plen){
                indexes.push(i - (slen-1))
            }
    
        }
        else{
           sref={} 
           slen = 0
        }       
        
    }
    return indexes;
};

console.log(findAnagrams("abab", "ab"))
console.log(findAnagrams("cbaebabacd", "abc"))