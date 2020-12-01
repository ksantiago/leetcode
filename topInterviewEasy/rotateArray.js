function rotate(arr, k) {
  while (k > 0) {
    let el = arr.pop()
    arr.unshift(el)
    k--
  }
  return arr
}


// function rotate(nums, k) {
//   while (k > 0) {

//   }
// }

var rotate = function(nums, k) {
    //solution 1:
    //nums.splice(0, 0, ...nums.splice((nums.length - k)));

    // solution 2:
    // for (let i = 0; i < k; i++) {
    //     nums.unshift(nums.pop());
    // }

    //solution 3:
    nums.unshift(...nums.splice(nums.length - k));
};


var rotate = function(nums, k) {
    if (nums.length < 2) return nums;
    const newArray = [...nums];
    for (let i = 0; i< nums.length; i++) {
        nums[(i+k) % nums.length] = newArray[i]
    }
};


var rotate = function(nums, k) {
    if (nums.length < 2) return nums;
    const newArray = [...nums];
    for (let i = 0; i< nums.length; i++) {
        nums[(i+k) % nums.length] = newArray[i]
    }
    return nums;
};

rotate([1,2,3,4,5,6,7], 3)

i = 5, k =3
    for (let i = 0; i< nums.length; i++) {
        nums[(i+k) % nums.length] = newArray[i]
        nums[(5+3) % 7] = newArray[5]
        nums[1] = newArray[5]



        console.log(newArray, ' - ', nums)
    }

console.log(6% 7)


// console.log([1,2,3,4].splice(4-3))
