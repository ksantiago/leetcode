// var intersect = function(nums1, nums2) {
//   const output = []
//   nums1.sort((a,b)=>a-b)
//   nums2.sort((a,b)=>a-b)
//   i = 0
//   j = 0

//   while (i < nums1.length && j < nums2.length) {

//     if (nums1[i] === nums2[j]) {
//       output.push(nums1[i])
//       i++
//       j++
//     }
//     else if (nums1[i] > nums2[j]) j++
//     else {
//       i++
//     }
//   }
//   return output
// };

var intersect = function (nums1, nums2) {
  const output = []
  const count = {}

  for (let i = 0; i < nums1.length; i++) {
    let curr = num1[i]
    count[curr] ? count[curr]++ : (count[curr] = 1)
  }

  for (let j = 0; j < nums2.length; j++) {
    let curr = nums2[j]
    if (count[curr] > 0) {
      output.push(curr)
      count[curr]--
    }
  }
  return output
}

// intersect([1,2,2,1], [2,2])
intersect([4, 9, 5], [9, 4, 9, 8, 4])
