// https://www.youtube.com/watch?v=XKu_SEDAykw

const containPairSum = (arr, sum) => {

    const list = Array.from(arr);
    let low = 0;
    let high = list.length - 1;
    let result = false;
    while (low < high) {
        value = list[low] + list[high]
        if (value == sum) {
            result = true;
            break;
        }
        else if (value > sum) {
            high = high - 1;
        }
        else {
            low = low + 1;
        }
    }
    console.log(`Result: ${result}`);
}

const containPairSum1 = (arr, sum) => {

    const list = Array.from(arr);
    const mySet = new Set();
    let result = false;

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const complement = sum - arr[i];
        if (mySet.has(element)) {
            result = true;
            break;
        }
        else {
            mySet.add(complement)
        }
    }

    console.log(`Result: ${result}`);
}

module.exports = {
    containPairSum,
    containPairSum1
}