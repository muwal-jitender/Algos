// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n))

// Example 1:
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

const findMedianSortedArrays = (nums1, nums2) => {
    if (Array.isArray(nums1) && Array.isArray(nums2)) {
        nums2.forEach(value => nums1.push(value));
        nums1.sort((a, b) => a - b);
        let index = Math.floor(nums1.length / 2);

        if (nums1.length % 2 === 0) {

            return (nums1[index - 1] + nums1[index]) / 2;
        }
        else {
            return nums1[index]
        }

    }

}

nums1 = [3], nums2 = [-1, -2];
//nums1 = [1, 2, 3], nums2 = [4, 5, 6]
const result = findMedianSortedArrays(nums1, nums2);
console.log(result);