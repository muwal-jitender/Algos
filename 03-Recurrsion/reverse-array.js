
class Solution {
    // Time Complexity O(n)
    reverseArray = (arr) => {
        if (Array.isArray(arr)) {
            let newArr = [];
            if (arr.length === 0) {
                return [];
            }
            else {
               return newArr.concat(this.reverseArray(arr.slice(1)), arr[0]);
            }
            //return newArr;
        }
        else {
            return 'Please provide a valid list';
        }
    }

    reverseString = (str) => {
        let reverseString = '';
        if (str.length === 0) {
            return '';
        }
        else {
            reverseString += this.reverseString(str.slice(1)) + str[0];
        }
        return reverseString;
    }
    palindrome = (str) => {

        if (str.length === 1) {
            return true;
        }
        else if (str.length === 2) {
            return str[0] === str.slice(-1);
        }
        else {
            if (str[0] === str.slice(-1)) {
                // Here child method would be called and the parent method would be returned later on
                return this.palindrome(str.slice(1, -1));
            }
        }
        return false;
    }
}

const solution = new Solution();
const result = solution.reverseArray([1, 2, 3, 4, 5, 6]);
//const result = solution.reverseString('');
// redivider, deified, civic
//const result = solution.palindrome('civic');
console.log(result);