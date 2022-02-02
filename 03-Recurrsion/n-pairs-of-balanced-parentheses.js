// const printParenthesis = (arr, len, open, close, permutations = '', answer = []) => {
//     if (close == len) {
//         answer.push([permutations]);
//         permutations='';
//     }

//     for (let i = 0; i < arr.length; i++) {
//         if (open < len) {
//             // permutations.push('(');
//             permutations += '(';
//             open++;
//             arr = new Array(arr.length - 1);
//             printParenthesis(arr, len, open, close, permutations, answer);
//             //permutations = permutations.slice(0, -1);
//             open--;
//         }
//         if (close < open) {
//             //permutations.push(')');
//             permutations += ')';
//             close++;
//             arr = new Array(arr.length - 1);
//             printParenthesis(arr, len, open, close, permutations, answer);
//             //permutations = permutations.slice(0, -1);
//             close--;
//         }
//     }
//     return answer;
// }

// // Driver program
// var n = 2;
// var str = new Array(2 * n);
// const result = printParenthesis(arr = str, len = n, open = 0, close = 0);
// console.log(result);

// Function that print all combinations of
// balanced parentheses
// open store the count of opening parenthesis
// close store the count of closing parenthesis
function _printParenthesis(str, pos, n, open, close) {
    if (close === n) {

        // print the possible combinations
        let answer = '';
        for (let i = 0; i < str.length; i++) {
            answer += str[i];
        }
        console.log(answer);
        return;
    }
    else {
        if (open < n) {
            str[pos] = '{';
            _printParenthesis(str, pos + 1, n, open + 1, close);
        }
        //if (open > close) {
        if (close < open) {
            str[pos] = '}';
            _printParenthesis(str, pos + 1, n, open, close + 1);
        }
    }
}

// Wrapper over _printParenthesis()
function printParenthesis(str, n) {
    if (n > 0)
        _printParenthesis(str, 0, n, 0, 0);
    return;
}

// Driver program
var n = 2;
var str = new Array(2 * n);
printParenthesis(str, n);
