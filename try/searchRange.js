
// 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

// 如果数组中不存在目标值 target，返回 [-1, -1]。

// 进阶：

// 你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//  输入：nums = [5,7,7,8,8,10], target = 8
//  输出：[3,4]

// nums = [], target = 0
// 输出：[-1,-1]

// 输入：nums = [5,7,7,8,8,10], target = 6
// 输出：[-1,-1]

 var searchRange = function(nums, target) {
  let start = -1;
  let end = -1;
  if (!nums.length) {
    return [start, end];
  }

  nums.forEach(function(num, index) {
    if (num === target && start === -1) {
      start = index;
      end = index;
    } else if (num === target && end !== index) {
      end = index;
    }
  });

  return [start, end];
};