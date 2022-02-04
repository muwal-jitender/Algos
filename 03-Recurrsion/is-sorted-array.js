const isSortedArray = arr => {
    if (arr.length === 0) return true;

    const min = Math.min(...arr);
    if (arr[0] === min) {
        let x = isSortedArray(arr.slice(1));
        return x;
    }
    return false;
}

// const result = isSortedArray([1, 2, 4, 3]);
// console.log(result);

const isSortedArray1 = arr => {
    if (arr.length === 0) return false;
    if (arr.length === 1) {
        return true;
    }
    if (arr[0] < arr[1]) {
        return isSortedArray1(arr.slice(1));
    }
    return false;
}

const result = isSortedArray1([1, 2, 4, 3]);
console.log(result);