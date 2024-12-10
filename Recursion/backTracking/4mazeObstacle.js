// Maze problem starting with backtracking
function mazeRightDownObstacle(row, col) {
    let matrixGuide = [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
    ]
    console.log(helper(0, 0, "", matrixGuide))
}
function helper(row, col, path, matrixGuide) {
    let resArray = []
    //in the last row
    if (row == matrixGuide.length - 1 && col == matrixGuide[0].length - 1) {
        resArray.push(path)
        return resArray
    }
    if (!matrixGuide[row][col]) {
        //return empty array for type match else it will throw error
        return []
    }
    if (row < matrixGuide.length - 1) {
        resArray = [...resArray, ...helper(row + 1, col, path + 'V', matrixGuide)]
    }
    if (col < matrixGuide[0].length - 1) {
        resArray = [...resArray, ...helper(row, col + 1, path + 'H', matrixGuide)]
    }
    //you cant be in the last row /col and go diagonal
    if (row < matrixGuide.length - 1 && col < matrixGuide[0].length - 1) {
        resArray = [...resArray, ...helper(row + 1, col + 1, path + 'D', matrixGuide)]
    }
    return resArray
}

mazeRightDownObstacle(3, 3)