

// var rotate = function(matrix) {
//   let n = matrix.length

//   if (n <= 1) { return matrix }
//   else {
//     for (let i = 0; i < matrix.length; i++) {
//       for (let j = 0; j < matrix.length; j++) {

//       }
//     }
//   }


// };

var rotate = function(matrix) {
  for(let i=0;i<matrix.length;i++){
      for(let j=i+1;j<matrix[i].length;j++){
          let temp = matrix[i][j]
          matrix[i][j] = matrix[j][i]
          matrix[j][i] = temp
          console.log(matrix)
      }
  }
  for(let i=0;i<matrix.length;i++){
      matrix[i].reverse()
  }
  return matrix
};

const matrix1 = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]


// 4
// i = 0
// j = 1
// 2

// [
//   [ 1, 4, 3 ],
//   [ 2, 5, 6 ],
//   [ 7, 8, 9 ]
// ]

// // 7
// // i = 0
// // j = 2
// // 3
// [
//   [ 1, 4, 7 ],
//   [ 2, 5, 6 ],
//   [ 3, 8, 9 ]
// ]

// // 6
// // i = 1
// // j = 2
// // 8
// [
//   [ 1, 4, 7 ],
//   [ 2, 5, 8 ],
//   [ 3, 6, 9 ]
// ]
// [
//   [ 7, 4, 1 ],
//   [ 8, 5, 2 ],
//   [ 9, 6, 3 ]
// ]

rotate(matrix1)
