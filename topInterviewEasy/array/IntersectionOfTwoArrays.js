var intersect = function(nums1, nums2) {
  const output = []
  nums1.sort((a,b)=>a-b)
  nums2.sort((a,b)=>a-b)
  i = 0
  j = 0
  
  while (i < nums1.length && j < nums2.length) {
    
    if (nums1[i] === nums2[j]) {
      output.push(nums1[i])
      i++
      j++
    }
    else if (nums1[i] > nums2[j]) j++
    else {
      i++
    }
  }
  return output
};

// intersect([1,2,2,1], [2,2])
intersect([4,9,5], [9,4,9,8,4])