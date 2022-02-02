const getOddValues = (arr) => {
    let result = [];
    arr = new Array(arr);

    if (Array.isArray(arr) && arr.length > 0) {
        const helper = (list) => {
            if (list.length == 0) {
                return;
            }
            if (list[0] % 2 != 0) {
                result.push(list[0]);
            }
            helper(list.slice(1));
        }
        helper(arr);
        return result;
    }
    else {
        return result;
    }
}

const getOddValues1 = (arr) => {
    let result = [];
    console.log(Math.pow(2, 4));
    if (Array.isArray(arr) && arr.length > 0) {

        if (arr.length == 0) {
            return;
        }
        if (arr[0] % 2 != 0) {
            result.push(arr[0]);
        }
        result = result.concat(getOddValues1(arr.slice(1)));
        return result;
    }
    else {
        return result;
    }
}
const result = getOddValues1([1, 2, 3, 4, 5]);
console.log(result);