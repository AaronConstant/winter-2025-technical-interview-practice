/**
 * Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 *
 * @param {number[]} nums - An array of integers.
 * @param {number} target - The target sum.
 * @return {number[]} - An array containing the indices of the two numbers that add up to the target.
 */
const twoSum = (nums, target) => {
  nums.sort((a, b) => a - b);

  if(nums.length === 1) return nums

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
      const sum = nums[left] + nums[right];

      if (sum === target) {
          return [nums[left], nums[right]];
      } else if (sum < target) {
          left++;
      } else {
          right--;
      }
  }
  return [];
};

// const twoSum = (nums, target) => {

// }



module.exports = twoSum;
