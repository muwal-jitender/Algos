const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

const collectStrings = (obj) => {
    let arr = [];
    for (let key in obj) {
        let element = obj[key];
        if (typeof (element) === "string") {
            arr.push(element);
        }
        if (typeof (element) === "object") {
            arr = arr.concat(collectStrings(element));
        }
    }
    return arr;
}
const result = collectStrings(obj) // ["foo", "bar", "baz"])
console.log(result);