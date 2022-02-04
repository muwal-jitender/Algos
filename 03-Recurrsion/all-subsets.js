// INPUT printSubsets([1, 2, 3], 0, '');
// OUTPUT
// (123)
// (12)
// (13)
// (1)
// (23)
// (2)
// (3)
// ()
const printSubsets = (arr, i, s) => {
    if (i === arr.length) {
        console.log(`(${s})`);
        return;
    }
    printSubsets(arr, i + 1, s + arr[i]);
    printSubsets(arr, i + 1, s);
}

printSubsets([1, 2, 3], 0, '');