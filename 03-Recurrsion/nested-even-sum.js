function nestedEvenSum1(obj) {
    var sum = 0;
    const helper = (obj, callback) => {
        const values = Object.values(obj);
        values.forEach(element => {
            if (typeof (element) === 'number' && callback(element)) {
                sum += element;
            }
            if (typeof (element) === 'object') {
                helper(element, isEven);
            }
        });
    }
    helper(obj, isEven);
    return sum;
}
function nestedEvenSum(obj, callback) {
    let sum = 0;
    const values = Object.values(obj);
    values.forEach(element => {
        if (typeof (element) === 'number' && callback(element)) {
            sum += element;
        }
        if (typeof (element) === 'object') {
            return sum += nestedEvenSum(element, isEven);
        }
    });

    return sum;
}
var obj2 = { // output 10
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' }
};
const isEven = x => x % 2 === 0;
var obj1 = { // output 6
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}


const result = nestedEvenSum(obj1, isEven, 0); // 6
console.log(result);
