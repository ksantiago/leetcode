// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

var twoSum = function(nums, target) {
  // 1. iterate through the array
  // 2. have a second iteration that starts at the second number
  // 3. does nums[i] + nums[j] === target
  // 4. if it does not, move the j
  // 5. if it does, return the i and j in an array
  // 6. if you're at the end of j, move the i

  // VERSION 1
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j]
    }
  }

  // VERSION 2


}

// twoSum([2,7,11,15], 9)
// twoSum([3,2,4], 6)
twoSum([3,3], 6)
