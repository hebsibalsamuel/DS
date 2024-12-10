// Maze problem starting with backtracking
function mazeAll(row, col) {
    let matrixGuide = [
        [1, 1, 1],
        [1, 1, 1],
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
    //flagging the path as visited when u traverse
    matrixGuide[row][col] = 0

    if (row < matrixGuide.length - 1) {
        resArray = [...resArray, ...helper(row + 1, col, path + 'D', matrixGuide)]
    }
    if (col < matrixGuide[0].length - 1) {
        resArray = [...resArray, ...helper(row, col + 1, path + 'R', matrixGuide)]
    }
    if (row > 0) {
        resArray = [...resArray, ...helper(row - 1, col, path + 'U', matrixGuide)]
    }
    if (col > 0) {
        resArray = [...resArray, ...helper(row, col - 1, path + 'L', matrixGuide)]
    }
    //Turn on to see the diagonal path also
    // if (row < matrixGuide.length - 1 && col < matrixGuide[0].length - 1) {
    //     resArray = [...resArray, ...helper(row + 1, col + 1, path + 'd', matrixGuide)]
    // }

    //backtracking the visited paths and removing the changes made
    //The future calls will be affected if not reverted
    matrixGuide[row][col] = 1

    return resArray
}

mazeAll(3, 3)