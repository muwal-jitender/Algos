// * * * * *
// * * * *
// * * *
// * *
// *
const printPattern = n => {

    if (n === 0) return;
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push('*');
    }
    console.info(...arr);
    printPattern(n - 1);
}

//printPattern(5);

const printPattern1 = (n, l) => {

    if (n === 0) return;
    let arr = [];
    for (let i = 0; i < l; i++) {
        arr.push('*');
    }
    console.info(...arr);
    printPattern1(n - 1, l + 1);
}
//printPattern1(5);

const printPattern1NoLoop = (arr, n, l) => {

    if (n === 0) return;
    //let arr = [];

    if (l < n) {
        arr.push('*');
        printPattern1NoLoop(arr, n-1, l + 1);
    }
    console.info(...arr);
    //printPattern1NoLoop([], n - 1, l + 1);
}

printPattern1NoLoop([], 7, 0);