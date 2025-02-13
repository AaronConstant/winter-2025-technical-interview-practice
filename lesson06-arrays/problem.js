// Prompt: Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.

/**
 * Checks if the largest element in the array is at least twice as much as every other number.
 * @param {number[]} nums - The integer array.
 * @returns {number} - The index of the largest element if it meets the condition, otherwise -1.
 */
function checkLargestElement(nums) {
    if (nums.length === 0) return -1

    const maxNum = Math.max(...nums);
    const maxIndex = nums.indexOf(maxNum);

    for (let i = 0; i < nums.length; i++) {
        if (i !== maxIndex && maxNum < 2 * nums[i]) {
            return -1;
        }
    }

    return maxIndex;
}

module.exports = checkLargestElement;
