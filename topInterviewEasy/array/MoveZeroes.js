var moveZeroes = function(nums) {
  let zeroCount = 0
  // loop through array
  for (let i = 0; i < nums.length; i++) {
    // if the el is 0, remove it
    let curr = nums[i]
    if (curr === 0) {
      zeroCount++
      nums.splice(i,1)
      i--

    }
  }
  // add the number of zeroCount to the back
  while (zeroCount > 0) {
    nums.push(0)
    zeroCount--
  }

  return nums
};



var moveZeroes = function(nums) {
  let j=0;
  for (let i=0; i<nums.length; i++){
    if(nums[i] !== 0){
      nums[j] = nums[i];
      j++;
    }
  }
  // console.log(nums, j)
  while(j<nums.length){
    nums[j] = 0;
    j++;
  }
  return nums;
};
// console.log(moveZeroes([0,1,0,3,12]))
console.log(moveZeroes([0,0,1]))

//[0,1,0,3,12]
//   i
// j val = 1
//zeroCount = 1
//[1,1,0,3,12]
//     i
//   j
//zeroCount = 2
//[1,1,0,3,12]
//       i
//   j val = 3
//zeroCount = 2
//[1,3,0,3,12]
//         i
//     j val = 12
//zeroCount = 2
//[1,3,12,3,12]
//           i
//        j val = 0
//zeroCount = 2
//[1,3,12,0,12]
//           i
//           j val = 0
//zeroCount = 2 ****
//[1,3,12,0,0]
//           i
//           j
//zeroCount = 2


// moveZeroes([0,1,0,3,12])
moveZeroes([0,0,1])
