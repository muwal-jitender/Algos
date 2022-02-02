
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


//stringifyNumbers(obj)

/* OUTPUT
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

const stringifyNumbers = (obj) => {
    var newObj = {};
    for (let key in obj) {
        let element = obj[key];
        if (typeof (element) === 'number') {
            newObj[key] = element.toString();
        }
        else if (typeof (element) === 'object' && !Array.isArray(element)) {
            newObj[key] = stringifyNumbers(element);
        }
        else {
            newObj[key] = element;
        }
    }
    console.log(newObj);
    return newObj;

}

stringifyNumbers(obj);