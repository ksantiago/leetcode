var plusOne = function(digits) {
  // 1. iterate through all the digits starting from the end
  // 2. if the number is a 9, make it a 0 and change index - 1
  // 3. if the number is not a 9, just add 1

  // for (let i = digits.length - 1; i >= 0; i--) {
  //   if (i === 0 && digits[i] === 9) {
  //     digits[i] = 0
  //     digits.unshift(1)

  //     return digits
  //   }
  //   else if (digits[i] === 9) {
  //     digits[i] = 0
  //   }
  //   else {
  //     digits[i]++
  //     return digits
  //   }
  // }

  // VERSION 2
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0
      if (i === 0) {
        return [1, ...digits]
      }
    }
    else {
      digits[i]++
    }
  }
  return digits
}

// plusOne([1,2,3])
// plusOne([0,0])
// plusOne([9,9])
plusOne([1,9,9])
