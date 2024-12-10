var checkInclusion = function (s1, s2) {
    let counts = {}
    let patternCounts = {};
    let total = 0;

    for (let i = 0; i < s1.length; i++) {
        patternCounts[s1[i]] = (patternCounts[s1[i]] || 0) + 1
    }
    for (let i = 0; i < s2.length; i++) {
        if (patternCounts[s2[i]]) {
            counts[s2[i]] = (counts[s2[i]] || 0) + 1;
            total++;

            while (counts[s2[i]] > patternCounts[s2[i]]) {
                // we move to the start of the window in this step and deleting the ele there
                // since total starts from 1 we decrement it 1st then subtracting it 
                // with I with has progressed so far
                counts[s2[i - --total]] -= 1
            }
            if (total === s1.length) return true;
        } else {
            counts = {}
            total = 0;
        }
    }
    return false
};
console.log(checkInclusion("hello",
    "ooolleoolleh"))


var checkInclusion = function (s, p) {
    let indexes = []
    let sref = {}
    let pref = {}
    let plen = p.length;

    for (let i = 0; i < p.length; i++) {
        pref[p[i]] = (pref[p[i]] || 0) + 1
    }
    let p1 = 0
    let p2 = 0
    let tempStr = "";
    while (p2 < s.length) {
        if (s[p2] in pref) {
            sref[s[p2]] = (sref[s[p2]] || 0) + 1
            tempStr += s[p2]

            while (sref[s[p2]] > pref[s[p2]]) {
                sref[s[p1]] = sref[s[p1]] - 1
                p1++
                tempStr = tempStr.substring(1)
            }

            if (tempStr.length === plen) {
                return [p2 - (plen - 1), tempStr]
                // indexes.push(p2 - (plen - 1))
            }

            p2++

        }
        else {
            sref = {}
            tempStr = ""
            //skip the character that's causing issue and move to next character and move p1 to that
            //same character as initial assumption p1=0 and p2=0
            p2++
            p1 = p2
        }
    }

    return indexes;
}

console.log(checkInclusion("ooolleoolleh",
    "hello"))
