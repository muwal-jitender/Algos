
const reverse = (str) => {
    const arr = str.split(' ');
    let reversedList = []
    for (let i = arr.length - 1; i >= 0; i--) {
        const characters = Array.from(arr[i]);
        let element = '';
        for (let char = characters.length - 1; char >= 0; char--) {
            element = element + characters[char];
        }

        reversedList.push(element);
    }
    return reversedList.join(' ');
}

const reverse1 = (str) => {
    const totalCharacs = str.length - 1;
    const backwords = [];
    for (let i = totalCharacs; i >= 0; i--) {
        backwords.push(str[i]);
    }
    console.log(backwords.join(''));
}
const reverse2 = (str) => {
    console.log([...str]);
    // console.log(str.split('').reverse().join(''));

}

const reverse3 = str => [...str].reverse().join('');

module.exports = {
    reverse,
    reverse1,
    reverse2,
    reverse3
}