const {
    performance
} = require('perf_hooks');


const everyone = ['angel', 'bruce', 'dory', 'marlin', 'gill', 'nemo', 'nigl', 'squird', 'darla', 'hank'];
const nemo = ['nemo']

const large = new Array(100).fill('nemo');

const findNemo = arr => {
    // let t0 = performance.now();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'nemo') {
            console.log('Found Nemo');
        }
    }
    // let t1 = performance.now();
    // console.log(`Call to find the Nemo took ${t1 - t0} miliseconds`);
}


const logAllPairs = (list) => {
    const arr = Array.from(list);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log('logAllPairs '+ arr[i], arr[j]);
        }
    }
}

logAllPairs(['a', 'b', 'c', 'd']);

arr1 = ['a', 'j', 'e', 'd', 'y']
arr2 = ['k', 'y', 'i', 'z']

const containCommonItems = (arr1, arr2) => {
    let map = {};
    if (!Array.isArray(arr2)) {
        return -1;
    }
    for (let i = 0; i < arr1.length; i++) {
        const element = arr1[i];
        if (!map[element]) {
            map[element] = true
        }
    };
    for (let j = 0; j < arr2.length; j++) {
        const element = arr2[j];
        if (map[element]) {
            return true;
        }
    }
    return false;
}

const containCommonItems1 = (arr1, arr2) => {
    if (Array.isArray(arr1) && Array.isArray(arr2)) {
        list1 = Array.from(arr1);
        list2 = Array.from(arr2);

        return list1.some(element => arr2.includes(element));
    }
    else {
        return -1;
    }
}



// console.log(containCommonItems1(arr1, arr2));