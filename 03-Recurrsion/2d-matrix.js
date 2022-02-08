
const mazePath = (rowSize, colSize, row, col, osf) => {
    if (row === rowSize - 1 && col === colSize - 1) {
        console.log(osf);
        return;
    }
    if (row >= rowSize || col >= colSize) {
        return;
    }
    mazePath(rowSize, colSize, row, col + 1, osf + 'R');
    mazePath(rowSize, colSize, row + 1, col, osf + 'D');
    mazePath(rowSize, colSize, row + 1, col + 1, osf + 'C');
}

//mazePath(2, 2, 0, 0, '');
mazePath(3, 3, 0, 0, '');
// OUTPUT:
// RRDD
// RDRD
// RDDR
// DRRD
// DRDR
// DDRR

// n: No of elements in a
// osf: output so far
const diceCase = (n, currentJump, osf) => {
    // Base case
    if (currentJump === n - 1) {
        // Self work
        console.log(osf);
        return;
    }
    // Base case
    if (currentJump >= n) {
        return;
    }
    for (let jump = 1; jump <= 6; jump++) {
        // Recursive case: Get all the paths from start+ i where i is the subset of (1,2,3,4,5,6) and self work
        diceCase(n, currentJump + jump, `${osf}${jump}${currentJump + jump >= n - 1 ? '' : '-'}`);
    }
}

//diceCase(4, 0, '');
// OUTPUT:
// 1-1-1
// 1-2
// 2-1
// 3