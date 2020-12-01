// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?


// [2,2,1]

// var singleNumber = function(nums) {
//   let pairs = {}
//   let j = 0
//   for (let i = 1; nums.length; i++) {
//     let curr = nums[j]
//     console.log(curr)
//     if (pairs[curr]) {
//       if (curr === nums[i]) {
//         pairs[curr] = 2
//         console.log(pairs)
//         j++
//       }
//     } else {
//       pairs[curr] = 1
//     }
//   }
// };

var singleNumber = function(nums) {
// version 1:
  const uniqNum = {}

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i]
    if (uniqNum[curr]) {
      delete uniqNum[curr]
    } else {
      uniqNum[curr] = true
    }
  }
  return Object.keys(uniqNum)[0]

  // version 2 O_o
  // let res = 0

  // for (let num of nums) {
  //   console.log('res:', res)
  //   console.log('num:', num)
  //   console.log(res ^= num)
  //   // res ^= num
  // }
  //   return res


}

// singleNumber([4])

// let num = 5
// console.log(num ^= 3)
// console.log(num ^= 3)
