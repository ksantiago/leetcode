var isUnique = function (array) {
  let counts = {}
  for (let i = 0; i < array.length; i++) {
    let curr = array[i]
    if (curr !== '.') {
      if (counts[curr] === 1) return false
      else counts[curr] = 1
    }
  }

  return true
}

// isUnique([".","9","8",".",".",".",".","6","."])

var isValidSudoku = function (board) {
  const cols = {},
    grids = {}

  for (let i = 0; i < board.length; i++) {
    let row = board[i]
    // console.log(row, isUnique(row))
    if (isUnique(row) === false) return false

    for (let j = 0; j < row.length; j++) {
      let curr = row[j]

      if (curr !== '.') {
        cols[j] ? cols[j].push(curr) : (cols[j] = [curr])

        if (j < 3) {
          if (i < 3) {
            grids[0] ? grids[0].push(curr) : (grids[0] = [curr])
          }
          if (i < 6 && i > 2) {
            grids[1] ? grids[1].push(curr) : (grids[1] = [curr])
          }
          if (i > 5) {
            grids[2] ? grids[2].push(curr) : (grids[2] = [curr])
          }
        } else if (j > 2 && j < 6) {
          if (i < 3) {
            grids[3] ? grids[3].push(curr) : (grids[3] = [curr])
          }
          if (i < 6 && i > 2) {
            grids[4] ? grids[4].push(curr) : (grids[4] = [curr])
          }
          if (i > 5) {
            grids[5] ? grids[5].push(curr) : (grids[5] = [curr])
          }
        } else {
          if (i < 3) {
            grids[6] ? grids[6].push(curr) : (grids[6] = [curr])
          }
          if (i < 6 && i > 2) {
            grids[7] ? grids[7].push(curr) : (grids[7] = [curr])
          }
          if (i > 5) {
            grids[8] ? grids[8].push(curr) : (grids[8] = [curr])
          }
        }
      }
    }
  }
  for (let key in cols) {
    if (!isUnique(cols[key])) return false
  }

  for (let key in grids) {
    if (!isUnique(grids[key])) return false
  }
  return true
}

// isValidSudoku([["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]])

isValidSudoku([
  ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
])
