var twoSum = function(nums, target) {

  // VERSION 1 O(n^2)
    // for (let i = 0; i < nums.length; i++) {
    //   for (let j = i+1; j < nums.length; j++) {
    //     if (target === nums[i] + nums[j]) {
    //       return [i, j]
    //     }
    //   }
    // }

  // VERSION 2
    // let nums2 = [...nums]
    // nums2.sort((a,b) => a - b)
    // // console.log(nums2)

    // let j = nums2.length - 1
    // let i = 0
    // while (i < j && i !== j) {
    //   if (target < nums2[j]) {
    //     j--
    //   }
    //   if (target === nums2[i] + nums2[j]) {
    //     return [nums.indexOf(nums2[i]), nums.indexOf(nums2[j])]
    //   }
    // }

      // const comp = {};
      // for(let i=0; i<nums.length; i++){
      //     if(comp[nums[i] ]>=0){
      //         return [ comp[nums[i] ] , i]
      //     }
      //     comp[target-nums[i]] = i
      //     console.log(comp)
      // }

  // O(n) - One-pass Hash Table (similar to 28-35)
  var twoSum = function(nums, target) {
      let map = new Map;
      for (var i = 0; i < nums.length; i++) {
          let complement = target - nums[i];
          if (map.has(complement)) {
              return [map.get(complement), i]
          }
          map.set(nums[i], i);
      }
  }


  };

  twoSum([11,2,7,15], 9)
  // twoSum([3,2,4], 6)
  // twoSum([3,3], 6)
  // twoSum([2,5,5,11], 10)

