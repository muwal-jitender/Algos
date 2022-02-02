
const merge = (list1, list2) => {
    const firstList = Array.from(list1);
    const secondList = Array.from(list2);
    if (firstList.length == 0) {
        return secondList;
    }
    if (secondList.length == 0) {
        return firstList;
    }

    mergedList = [];
    let i = 0;
    let j = 0;

    while (i < firstList.length || j < secondList.length) {
        if (secondList[j] == null || (firstList[i] < secondList[j])) {
            mergedList.push(firstList[i]);
            i++;
        }
        else {
            mergedList.push(secondList[j]);
            j++;

        }
    }

    return mergedList;

}

const mergeSort = (list) => {
    const arr = Array.from(list);
    if (arr.length == 0)
        return null;
    if (arr.length == 1)
        return arr;

    if (arr.length == 2)
        return arr[0] < arr[1] ? arr : [arr[1], arr[0]];

    else {
        const mid = Math.ceil(arr.length / 2);
        const leftPart = arr.slice(0, mid);
        const rightPart = arr.slice(mid, arr.length);
        const sortedleftArray = mergeSort(leftPart);
        const sortedRightArray = mergeSort(rightPart);
        const output = merge(sortedleftArray, sortedRightArray);
        console.log(output);
    }

}


const callMergeSort = () => {
    const list = [38, 27, 43, 3, 9, 82, 10];
    // const list = [27, 38]
    console.log(mergeSort(list));
}

module.exports = {
    callMergeSort
}