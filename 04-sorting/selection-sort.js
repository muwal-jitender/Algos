// https://visualgo.net/en/sorting
// O(n^2)
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

const findSmallestSmart = (list, i) => {
    if (Array.isArray(list)) {
        let index = list[i + 1] === undefined ? i : i + 1;
        for (; i < list.length; i++) {
            if (list[index] > list[i]) index = i;
        }
        return index;
    }
}
const selectionSortSmart = list => {
    if (Array.isArray(list)) {

        for (i = 0; i < list.length; i++) {
            let small = i;
            for (j = i + 1; j < list.length; j++) {
                if (list[small] > list[j]) small = j;
            }
            [list[i], list[small]] = [list[small], list[i]];

        };

    }
}

const selectionSortFinal = nums => {
    if (Array.isArray(nums)) {
        let isSwapped = false;
        let loop = 0;
        do {
            let min = loop;
            for (let i = min + 1; nums[i] !== undefined && i < nums.length; i++) {
                if (nums[min] > nums[i]) min = i;
            }
            [nums[loop], nums[min]] = [nums[min], nums[loop]];
            loop += 1;
            min = loop;
            if (loop === nums.length) isSwapped = true;
        } while (!isSwapped);
    }
}

// const list = [5, 2, 40, 0, 25, -7, 1];
const list = [2, 1, 3, 0, 1];

//const result = findSmallest(list);
//const result = selectionSort(list);

//const result = findSmallestRecursive(list, 0, 0);
selectionSortFinal(list);;

console.log(list);
