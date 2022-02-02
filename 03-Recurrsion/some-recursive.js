// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false


const isOdd = x => x % 2 !== 0;
const someRecursive = (arr, callback) => {
    if (arr.length <= 0)
        return false;
    if (callback(arr[0]))
        return true;

    return someRecursive(arr.slice(1), callback);

}

const result = someRecursive([2,8,3,4], isOdd);
console.log('The result of the someRecursive is ' + result);