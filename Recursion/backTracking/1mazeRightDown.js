// Maze problem starting with backtracking
// when you are 2nd row the problem gets shrinked so processes unprocessed method is used
function mazeRightDown(row, col) {
    console.log(helper(row, col, 0))
}
// *****only right and down*****************
function helper(row, col) {
    let count = 0
    if (row == 1 && col == 1) {
        //when the object reaches end of row/column add 1 path
        return 1
    }
    if (row > 1) {
        count = count + helper(row - 1, col, count)
    }
    if (col > 1) {
        count = count + helper(row, col - 1, count)
    }
    return count
}

mazeRightDown(3, 3)