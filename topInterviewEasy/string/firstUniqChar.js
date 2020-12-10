/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let count = {};
  let idx = -1;

  for (let i = 0; i < s.length; i++) {
      const char = s[i];
      count[s[i]] ? count[char] += 1 : count[char] = 1;
  }

  for (let key in count) {
      if (count[key] === 1) {
          if (s.indexOf(key) < idx || idx === -1) idx = s.indexOf(key);
      }
  }

  return idx;
};

firstUniqChar("leetcode")
