##### bubble sort
```
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    for(var i = 0; i < nums.length - 1; i++) {
        if(nums[i] < target) {
            for(var j = i + 1; j < nums.length; j++) {
                if(nums[j] < target && nums[i] + nums[j] === target) {
                    return [i, j]
                }
            }
        }
    }
}
```
##### quick sort
```
var quickSort = function(arr) {
    if (arr.length <= 1 ) {
        return arr
    }
    var midIndex = Math.floor(arr.length/2)
    var mid = arr[midIndex]
    var lf = [],
        rg = []
    arr.forEach(function(num, i) {
        if (i === midIndex) {
            return
        } else if (num <= mid) {
            lf.push(num)
        } else {
            rg.push(num)
        }
    })
    return quickSort(lf).concat([mid], quickSort(rg))
}
```
##### Merge
```
分治法
1、先将C数组划分为A、B两组
2、在对A、B重复1操作 逐步划分 直到子数组只剩余一个元素 这样划分那就结束了
3、从下往上不断合并数组 每次从待合并的两个子数组中选取一个最小的元素 将其放到合并后的数组中 不断重复知道吧两个子数组的元素都放到合并后的数组为止
4、一次类推直到合并到最上层结束

var mergeSort = function(arr) {
    if (arr.length <= 1) {
        return arr
    }
    var midIndex = Math.floor(arr.length/2)
    var lf = arr.slice(0, midIndex)
        rg = arr.slice(midIndex)
    return merge(mergeSort(lf), mergeSort(rg))
}
function merge(lf, rg) {
    var result = []
    while(lf.length > 0 && right.length > 0) {
        if (lf[0] < rg[0]) {
            result.push(lf.shift())
        } else {
            result.push(rg.shift())
        }
    }
    return result.concat(lf, rg)
}
```

##### heap sort
```
堆排序可以说是一种利用堆的概念来排序的选择排序。分为两种方法：
大顶堆：每个节点的值都大于或等于其子节点的值，在堆排序算法中用于升序排列
小顶堆：每个节点的值都小于或等于其子节点的值，在堆排序算法中用于降序排列
时间复杂度为O(nlogn)  空间复杂度两种常见的O(n)与O(1)

```