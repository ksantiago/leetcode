// var plusOne = function(digits) {
//   if (digits.length === 1 && digits[0] !== 9) {
//     digits[0]++
//     return digits
//   }
//   if (digits.length === 1 && digits[0] === 9) {
//     digits = [1,0]
//     return digits
//   }
//   if (digits.length > 1) {
//     let nums = digits.join('')
//     console.log(nums)
//     nums = nums.toString().split('')
//     console.log(nums)
//     for (let i = 0; i < nums.length; i++) {
//       nums[i] = Number(nums[i])
//     }
//     digits = nums
//   }
//   return digits
// };

// plusOne([0,9,9])
  // if (digits.length === 1 && digits[0] !== 9) {
  //   digits[0]++
  //   return digits
  // }
  // if (digits.length === 1 && digits[0] === 9) {
  //   digits = [1,0]
  //   return digits
  // }


// var plusOne = function(digits) {

//   for (let i = digits.length - 1; i >= 0; i--) {
//     if (i === 0 && digits[i] === 9) {
//       digits[i] = 0
//       digits.unshift(1)
//       return digits
//     }
//     if (digits[i] < 9) {
//       digits[i]++
//       return digits
//     } else {
//       digits[i] = 0
//     }
//   }


// }


var plusOne = function(digits) {
    for(let i = digits.length - 1; i >= 0; i --){
        if(digits[i] === 9){
          digits[i] = 0;
        }
        else {
          digits[i] ++;
          return digits;
        }
    }
  return [1, ...digits];
};
plusOne([0,0])

// let n = 10

// n.toString().length
// console.log(n.toString().length)


// var plusOne = function(digits) {
//     if (digits.length === 0) return [];
//     const x = BigInt(digits.join('')) + BigInt('1');
//     if (Number(digits.join('')) === 0) {
//         digits[digits.length - 1] += 1;
//         return digits;
//     }
//     return x.toString().split('').map((a) => Number(a));
// };

// var plusOne = function(digits) {
//     let expand=false;

//     for (let i=digits.length-1;i>=0;i--){
//       if(digits[i]===9){
//         digits[i]=0;
//         if(i===0) expand = true;
//       }
//       else{
//         digits[i]++;
//         break;
//       }
//     }

//     if(expand){
//         digits=[1,...digits]
//     }
//     return digits;
// };


function plusOne(digits) {

  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0
      if (i === 0) {
        digits = [1, ...digits]
      }
    } else {
      digits[i]++
    }
  }
  return digits
}


plusOne([9,9])
