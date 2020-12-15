var strStr = function(haystack, needle) {
  // loop through the haystack
  // console.log(haystack.slice(0, needle.length))
  if (needle === "") return 0
  let len = needle.length
  let i = 0

  while (i < haystack.length) {
    let currStr = haystack.slice(i, i+len)
    console.log(currStr, i)
    if (currStr !== needle) {
      i++
    }
    else return i

  }
  return -1
  // return -1 if needle is not in haystack
  // return -1
  // slice with the curr i till the length of the needle
  // does that === needle?
  // if it is, return i
};

// strStr("hello", "ll")
// strStr("aaaaa", "bba")
strStr("", "")
