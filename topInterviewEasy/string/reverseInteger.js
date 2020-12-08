var reverse = function(x) {
  // // VERSION 1
  // let xStr = x.toString()
  // xStr = xStr.split('')
  // xStr.reverse()
  // xStr = xStr.join('')
  // x = Number(xStr)

  // return xStr

  // Efficient version
  var reverseN = 0;
  var sign = n < 0;
  n = Math.abs(n);
  while (n) {
      reverseN = reverseN*10 + (n % 10);
      n = Math.floor(n/10);
  }
  return reverseN > 0x7FFFFFFF ? 0 : sign ? -reverseN : reverseN;
};

reverse(123)

