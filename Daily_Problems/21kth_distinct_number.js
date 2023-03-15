
var kthDistinct = function (arr, k) {
	let obj = {}
	let distincts = []
	for (let i = 0; i < arr.length; i++) {
		obj[arr[i]] = (obj[arr[i]] || 0) + 1
	}
	for (keys in obj) {
		if (obj[keys] === 1) {
			distincts.push(keys)
		}
	}
	console.log(distincts)
	return distincts[k-1] ?  distincts[k-1] :  ""
};

let arr = ["a","b","a"], k = 3
// arr = ["aaa","aa","a"], k = 1
// arr = ["d", "b", "c", "b", "c", "a"], k = 2
console.log(kthDistinct(arr, k))