
const printSubsets = (arr, i, s) => {
    if (i === arr.length) {
        console.log(`(${s})`);
        return;
    }
    printSubsets(arr, i + 1, s + arr[i]);
    printSubsets(arr, i + 1, s);
}

printSubsets([1, 2], 0, '');