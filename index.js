// ----------------- Module 1 ------------------------
// const prob = require('./01-solve-coding-problems/pair-sum');

// // sumArray = [1, 2, 3, 6, 8, 9];
// sumArray = [3, 4, 6, 7, 9];

// // prob.containPairSum1(sumArray, 9);

// // const mapIndex = require('./07-hash/index');
// const arrayIndex = require('./02-arrays/index')

let findLukcy = (nums) => {
  var hash = {};
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (hash[element]) hash[element] = hash[element] + 1;
    else hash[element] = 1;
  }
  let newArr = Object.keys(hash).filter((ele) => Number(ele) === hash[ele]);

  return newArr.length === 0 ? -1 : Math.max(...newArr);
};
let nums = [2, 2, 2, 4, 3, 3];
// let result = findLukcy(nums);
// console.log(result);

function findExtraCharcter(strA, strB) {
  let hash = {};
  for (let i = 0; i < strB.length; i++) {
    const ele = strB[i];
    if (hash[ele]) hash[ele]++;
    else hash[ele] = 1;
  }
  for (let i = 0; i < strA.length; i++) {
    const ele = strA[i];
    if (hash[ele]) hash[ele]--;
  }
  return Object.keys(hash)
    .filter((key) => hash[key] === 1)
    .toString();
}
let strA = "kxml";
let strB = "klxml";
// console.log(findExtraCharcter(strA.split(""), strB.split("")));

const CallPoints = (ops) => {
  let nums = [];
  for (let i = 0; i < ops.length; i++) {
    const element = ops[i];
    switch (element) {
      case "C":
        nums.pop();
        break;
      case "D":
        nums.push(nums[nums.length - 1] * 2);
        break;
      case "+":
        nums.push(nums[nums.length - 1] + nums[nums.length - 2]);
        break;
      default:
        nums.push(parseInt(element));
        break;
    }
  }
  return nums.reduce((x, y) => {
    return x + y;
  }, 0);
};

const main = () => {
  const ops = ["5", "2", "C", "D", "+"];
  // const ops = ["5", "-2", "4", "C", "D", "9", "+", "+"];
  console.log(CallPoints(ops));
};
// main();

//nums = [3, 5, 2, 3];
nums = [3, 5, 4, 2, 4, 6];
var minPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  let pairSum = 0;
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    pairSum = Math.max(pairSum, nums[l] + nums[r]);
    l++;
    r--;
  }
  return pairSum;
};
// console.log(minPairSum(nums));

let twoSum = function (nums, target) {
  nums.sort((a, b) => a - b);

  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    let total = nums[l] + nums[r];
    if (total === target) {
      return [l, r];
    } else if (total > target) r--;
    else if (total < target) l++;
  }
  return [-1, -1];
};

nums = [2, 3, 4, 5, 6];
//console.log(twoSum(nums, 11));

let maxtwoSum = function (nums, target) {
  nums.sort((a, b) => a - b);

  let l = 0;
  let r = nums.length - 1;
  let max = -1;
  while (l < r) {
    let total = nums[l] + nums[r];
    if (total === target) {
      return [l, r];
    } else if (total >= target) r--;
    else if (total < target) {
      max = Math.max(max, total);
      l++;
    }
  }
  return max;
};

// https://wentao-shao.gitbook.io/leetcode/two-pointers/1099.two-sum-less-than-k
//nums = [34, 23, 1, 24, 75, 33, 54, 8];
// k = 60;
nums = [10, 20, 30];
let k = 15;
//console.log(maxtwoSum(nums, k));

// https://leetcode.com/problems/partition-to-k-equal-sum-subsets/
var canPartitionKSubsets = function (nums, k) {
  nums.sort((a, b) => a - b);

  let numsTotal = nums.reduce((previous, current) => {
    return previous + current;
  }, 0);

  let sum = Math.sum();
  if (numsTotal % k > 0) return false;
  let target = numsTotal / k;
  let l = 0;
  let r = nums.length - 1;
  result = false;
  while (l < r) {
    if (nums[r] === target) {
      result = true;
      r--;
    } else if (target === nums[l] + nums[r]) {
      result = true;
      r--;
      l++;
    } else {
      result = false;
    }
  }
  return result;
};

//nums = [4, 3, 2, 3, 5, 2, 1];
// nums = [1, 2, 3, 4];
// k = 3;
nums = [1, 1, 1, 1, 2, 2, 2, 2];
k = 2;
// console.log(canPartitionKSubsets(nums, k));

// https://www.educative.io/courses/grokking-the-coding-interview/gx2OqlvEnWG
const find_subsets = function (nums) {
  const subsets = [];
  subsets.push([]);
  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    let n = subsets.length;
    for (let j = 0; j < n; j++) {
      const set1 = subsets[j].slice(0);
      console.log(`set1 ${set1}`);
      set1.push(currentNumber);
      subsets.push(set1);
    }
  }
  return subsets;
};

// console.log("Here is the list of subsets: ");
// //result = find_subsets([1, 5, 3]);
// result = find_subsets([1, 3, 3]);
// result.forEach((subset) => {
//   console.log(subset);
// });

const find_unique_subsets = function (nums) {
  nums.sort((a, b) => a - b);
  let subsets = [];
  subsets.push([]);
  let startIndex = 0;
  let endIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    startIndex = 0;
    if (i > 0 && element === nums[i - 1]) {
      startIndex = endIndex;
    }
    endIndex = subsets.length;
    for (let j = startIndex; j < endIndex; j++) {
      const set1 = subsets[j].slice(0);
      set1.push(element);
      subsets.push(set1);
    }
  }
  return subsets;
};

// console.log("Here is the list of subsets: ");
// result = find_unique_subsets([1, 5, 3]);
// result.forEach((subset) => {
//   console.log(subset);
// });

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
var sortedSquares = function (nums) {
  let ans = [];
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    lSqrt = nums[l] * nums[l];
    rSqrt = nums[r] * nums[r];
    if (rSqrt > lSqrt) {
      ans.push(rSqrt);
      r--;
    } else if (lSqrt > rSqrt || lSqrt == rSqrt) {
      ans.push(lSqrt);
      l++;
    }
  }
  ans.reverse();
  return ans;
};
nums = [-7, -3, 2, 3, 11]; // OUTPUT: [4,9,9,49,121]
// nums = [-4, -1, 0, 3, 10];
// console.log(sortedSquares(nums));

// https://leetcode.com/problems/substring-with-concatenation-of-all-words/

// Input: s = "barfoothefoobarman", words = ["foo","bar"]
// Output: [0,9]
// Explanation: Substrings starting at index 0 and 9 are "barfoo" and "foobar" respectively.
// The output order does not matter, returning [9,0] is fine too.
// "wordgoodgoodgoodbestword"
// ["word","good","best","good"] // OUTPUT: [8]
var findSubstring = function (s, words) {
  let map = {};
  words.forEach((element, index) => {
    if (map[element]) map[element]++;
    else map[element] = 1;
  });
  let result = [];
  let wordsCount = words.length;
  let window = words[0].length;
  for (let i = 0; i <= s.length - window * wordsCount; i++) {
    let seen = {};
    for (let j = 0; j < wordsCount; j++) {
      let wordIndex = i + j * window;
      let nextWord = s.substr(wordIndex, window);
      if (!map[nextWord]) break;

      if (seen[nextWord]) seen[nextWord]++;
      else seen[nextWord] = 1;

      if (seen[nextWord] > map[nextWord]) break;
      if (j + 1 == wordsCount) result.push(i);
    }
  }
  return result;
};

let s = "barfoothefoobarman";
let words = ["foo", "bar"];
//console.log(findSubstring(s, words));

// https://leetcode.com/problems/find-all-anagrams-in-a-string/
// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".

const findAnagrams = function (s, p) {
  let ans = [];
  let hash = {};
  let pHash = {};
  let window = p.length;
  let len = s.length;
  if (window > len) return ans;
  let l = 0;
  let r = 0;

  while (r < window) {
    if (hash[s[r]]) hash[s[r]]++;
    else hash[s[r]] = 1;
    if (pHash[p[r]]) pHash[p[r]]++;
    else pHash[p[r]] = 1;
    r++;
  }

  // Sliding window technique where we remove one left character and add one right character.
  // https://www.youtube.com/watch?v=G8xtZy0fDKg
  while (r <= len) {
    const equal = hashEqual(pHash, hash);
    if (equal) ans.push(l);

    hash[s[l]]--;
    l++;

    if (hash[s[r]]) hash[s[r]]++;
    else hash[s[r]] = 1;
    r++;
  }
  return ans;
};

const hashEqual = (hashP, hashS) => {
  for (let [key, value] of Object.entries(hashP)) {
    if (value !== hashS[key]) return false;
  }
  return true;
};
// abab ab
// cbaebabacd abc
// abcdecdbacd cab
// baa aa
s = "cbaebabacd";
let p = "abc";
console.log(findAnagrams(s, p));
