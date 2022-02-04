
const mazePath = (n, m, row, col, osf) => {
    if (row === n - 1 && col === m - 1) {
        console.log(osf);
        return;
    }
    if (row >= n || col >= m) {
        return;
    }
    mazePath(n, m, row, col + 1, osf + 'R');
    mazePath(n, m, row + 1, col, osf + 'D');
}

//mazePath(3, 3, 0, 0, '');

const diceCase = (n, i, osf) => {
    if (i === n - 1) {
        console.log(osf);
        return;
    }
    if (i >= n) {
        return;
    }
    for (let jump = 1; jump < 6; jump++) {
        diceCase(n, i + jump, `${osf}${jump}${i + jump >= n - 1 ? '' : '-'}`);
    }

}

diceCase(4, 0, '');