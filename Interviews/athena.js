let s1 = "india";
//output = ndia
let s2 = "programming";
//output= ogram
let s3 = "aaaaa"
// get a substring without any duplicates

function getLargestSubString(s) {
  let pointer1 = 0
  let pointer2 = 0
  let obj = {}
  let longestString = ""
  let tempString = ''
  while (pointer2 < s.length) {
    obj[s[pointer2]] = (obj[s[pointer2]] || 0) + 1
    if (obj[s[pointer2]] === 1) {
      tempString += s[pointer2]
      if (longestString.length < tempString.length) {
        longestString = tempString
      }
      pointer2++
    }
    else {
      tempString += s[pointer2]
      while (obj[s[pointer2]] !== 1) {
        obj[s[pointer1]] = obj[s[pointer1]] - 1
        pointer1++
        tempString = tempString.substring(1)
      }
      pointer2++

    }
  }
  // console.log(arr)
  return longestString
}
console.log(getLargestSubString(s2))


function getLargestSubStringandcharCount(s) {
  let pointer1 = 0
  let pointer2 = 0
  let obj = {}
  let maxLength = 0
  let tempStr = ""
  let longestString = ""
  while (pointer2 < s.length) {
    obj[s[pointer2]] = (obj[s[pointer2]] || 0) + 1
    if (obj[s[pointer2]] === 1) {
      tempStr += s[pointer2]
      if (tempStr.length > longestString.length) {
        longestString = tempStr
      }
      // maxLength = Math.max(maxLength, pointer2 - pointer1 + 1)
      pointer2++

    }
    else {
      tempStr += s[pointer2]
      // maxLength = Math.max(maxLength, ((pointer2 - 1) - pointer1))
      while (obj[s[pointer2]] !== 1) {
        obj[s[pointer1]] = obj[s[pointer1]] - 1
        if (obj[s[pointer1]] === 0) delete obj[s[pointer1]]
        tempStr = tempStr.substring(1)
        pointer1++
      }
      pointer2++
    }

  }
  return longestString
}
console.log(getLargestSubStringandcharCount(s3))



