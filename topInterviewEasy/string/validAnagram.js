var isAnagram = function(s, t) {
  if (s.length !== t.length) return false

  // let sArr = s.split('')
  // let tArr = t.split('')

  // while (sArr.length > 0) {

  //   let last = sArr.pop()

  //   if (tArr.indexOf(last) === -1) return false
  //   else {
  //     let ind = tArr.indexOf(last)
  //     tArr.splice(ind, 1)

  //   }

  // }

  // return true

  // VERSION 2
  let sObj = {}
  let tObj = {}

  for (let i = 0; i < s.length; i++) {
    sObj[s[i]] ? sObj[s[i]]++ : sObj[s[i]] = 1
    tObj[t[i]] ? tObj[t[i]]++ : tObj[t[i]] = 1
  }

  for (let key in sObj) {
    if (sObj[key] !== tObj[key]) return false
  }
  return true
};

isAnagram("art", "rat")
// isAnagram("anagram", "nagaram")
