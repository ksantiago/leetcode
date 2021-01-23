var longestCommonPrefix = function (strs) {
  let prefix = ''
  const word = strs[0]

  for (let i = 0; i < strs[0].length; i++) {
    let curr = word[i]

    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] != curr) return prefix
      if (strs[j][i] === curr && j === strs.length - 1) prefix += curr
    }
  }
  return prefix
}
