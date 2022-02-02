

const returnFirstrecurringElement = (arr) => {
    list = Array.from(arr);
    const complements = new Set();

    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        if (complements.has(element)) {
            return element;
        }
        else {
            complements.add(element);
        }
    }
    return undefined;
}

const returnFirstrecurringElement1 = (arr) => {
    list = Array.from(arr);
    Math.min()
    for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return arr[i]
            }
        }
    }
    return undefined;
} // O(n^2)

const returnFirstrecurringElement2 = (arr) => {
    list = Array.from(arr);

    for (let i = 0; i < arr.length; i++) {
        console.log(`map[arr[${i}]]: ${map[arr[i]]}`);
        if (map[arr[i]] !== undefined) {
            return arr[i];
        }
        else {
            map[arr[i]] = i;
        }
        console.log(`map: ${JSON.stringify(map)}\n`);
    }
    return undefined;
}

function returnFirstrecurringElement3(input) {
    const arr = [];
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] === input[j]) {
                arr.push(j)

            }
        }
    }
    if (arr.length) {
        let first = Math.min(...arr)
        return input[first]
    }

    return undefined

}

const callFirstrecurringElement = () => {
    arr1 = [2, 3, 9, 8, 3, 11, 1, 2, 4];
    arr2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
    arr3 = [2, 3, 4, 5];

    console.log(returnFirstrecurringElement3(arr1));
} //Time O(n), Space O(n)

module.exports = {
    callFirstrecurringElement
}