// Maze problem starting with backtracking
// when you are 2nd row the problem gets shrinked so processes unprocessed method is used
function mazeRightDownDiagonal(row, col) {
    console.log(helper(row, col, ""))
}
function helper(row, col, path) {
    let resArray = []
    if (row == 1 && col == 1) {
        //when the object reaches end of row/column add 1 path
        resArray.push(path)
        return resArray
    }
    if (row > 1) {
        resArray = [...resArray, ...helper(row - 1, col, path + 'V')]
    }
    if (col > 1) {
        resArray = [...resArray, ...helper(row, col - 1, path + 'H')]
    }
    //you cant be in the last row /col and go diagonal
    if (row > 1 && col > 1) {
        resArray = [...resArray, ...helper(row - 1, col - 1, path + 'D')]
    }
    return resArray
}

mazeRightDownDiagonal(3, 3)