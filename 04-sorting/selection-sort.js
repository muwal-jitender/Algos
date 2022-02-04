const findSmallest = list => {
    if (Array.isArray(list)) {
        let i = 0;
        list.forEach((value, index) => {
            if (list[i] > value) {
                i = index;
            }
        });
        return i;
    }
}
const selectionSort = list => {
    if (Array.isArray(list)) {
        let sortedList = [];
        list.forEach(element => {
            let small = findSmallestRecursive(list);
            sortedList.push(list[small]);
            list = list.filter((value, index) => index !== small);
        });
        return sortedList;
    }
}

const findSmallestRecursive = (list, currentIndex, smallIndex) => {
    if (Array.isArray(list)) {
        if (currentIndex > list.length - 1) return smallIndex;
        if (list.length === 1)
            return 0;
        smallIndex = list[smallIndex] < list[currentIndex] ? smallIndex : currentIndex;
        return findSmallestRecursive(list, currentIndex + 1, smallIndex);
    }
}

const selectionSortRecursive = (list, sortedList) => {
    if (Array.isArray(list)) {
        if (list.length <= 0) {
            return sortedList;
        }

        let smallIndex = findSmallestRecursive(list, 0, 0);
        sortedList.push(list[smallIndex]);
        list = list.filter((value, index) => index !== smallIndex);
        return selectionSortRecursive(list, sortedList);

    }
}


const list = [5, 2, 40, 0, 25, 1];
//const result = findSmallest(list);
//const result = selectionSort(list);

//const result = findSmallestRecursive(list, 0, 0);
const result = selectionSortRecursive(list, []);

console.log(result);
