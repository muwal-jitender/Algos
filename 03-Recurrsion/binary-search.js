// TC = (Log^n)
// SC = (Log^n)
const binarySearch = (list, left, right, item) => {
    if (left > right) {
        return -1;
    }

    let mid = Math.floor((left + right) / 2);
    const guess = list[mid];
    if (guess === item) return mid;

    if (guess > item) {
        right = mid - 1;
        return binarySearch(list, left, right, item);

    }
    else {
        left = mid + 1;
        return binarySearch(list, left, right, item);

    }
}
// const list = [1, 3, 6, 8, 9, 13, 18, 20];
const list = [1, 3, 6, 8];
const result = binarySearch(list, 0, list.length - 1, 8);;
console.log(result);
