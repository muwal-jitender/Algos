const mergeSortedArrays = (array1, array2) => {
    if (array1.length === 0) {
        return array2;
    }
    if (array2.length === 0) {
        return array1;
    }
    array1Item = array1[0];
    array2Item = array2[0];
    let i = 1, j = 1;

    mergedArray = [];
    while (array1Item || array2Item) {

        if (array2Item == null || array1Item < array2Item) {
            mergedArray.push(array1Item);
            array1Item = array1[i];
            i++;
        }
        else {
            mergedArray.push(array2Item);
            array2Item = array2[j];
            j++;
        }
    }
    console.log(mergedArray);
}

const callMergeSortedArrays = () => {
    list1 = [4, 6, 30];
    list2 = [0, 3, 4, 31];

    mergeSortedArrays(list1, list2);
}

module.exports = {
    callMergeSortedArrays
}
