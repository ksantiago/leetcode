var reverseString = function(s) {
  // VERSION 1
  let len = s.length

  let i = s.length - 1
  while (i >= 0) {
    s.push(s[i])
    i--
  }

  s.splice(0, len)
  return s

  // VERSION 2
  // return s.reverse()

  // VERSION 3
    // let l = 0;
    // let r = s.length - 1;
    // let temp;

    // while(l<r) {
    //     temp = s[l];
    //     s[l] = s[r];
    //     s[r] = temp;
    //     l++;
    //     r--;
    // }
};

// reverseString(["h","e","l","l","o"])
reverseString(["H","a","n","n","a","h"])
