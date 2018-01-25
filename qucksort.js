/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var arr = [12, 23, 5, 24, 67, 45, 12, 8]
 /**
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

var result = twoSum([1, 7, 18, 12], 13)
console.log('result is : ', result)
 */

 /**

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

var result = quickSort(arr)
  */

/**
 *
 * var mergeSort = function(arr) {
    if (arr.length === 1) {
        return arr
    }
    var midIndex = Math.floor(arr.length/2)
    var lf = arr.slice(0, midIndex),
        rg = arr.slice(midIndex),
        st = merge(mergeSort(lf), mergeSort(rg))
    console.log(lf, rg, st)
    return st
}
function merge(lf, rg) {
    var result = []
    while(lf.length > 0 && rg.length > 0) {
        if (lf[0] < rg[0]) {
            result.push(lf.shift())
        } else {
            result.push(rg.shift())
        }
    }
    return result.concat(lf, rg)
}
var result = mergeSort(arr)
 */
var heapSort = function(array) {
    function swap(array, i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    function maxHeapify(array, index, heapSize) {
        var iMax,
            iLeft,
            iRight;
        while (true) {
            iMax = index;
            iLeft = 2 * index + 1;
            iRight = 2 * (index + 1);

            if (iLeft < heapSize && array[index] < array[iLeft]) {
                iMax = iLeft;
            }

            if (iRight < heapSize && array[iMax] < array[iRight]) {
                iMax = iRight;
            }

            if (iMax != index) {
                swap(array, iMax, index);
                index = iMax;
            } else {
                break;
            }
        }
    }
    // 构建大顶堆
    function buildMaxHeap(array) {
        var i,
            iParent = Math.floor(array.length / 2) - 1;

        for (i = iParent; i >= 0; i--) {
            maxHeapify(array, i, array.length);
        }
    }

    function sort(array) {
        buildMaxHeap(array);

        for (var i = array.length - 1; i > 0; i--) {
            swap(array, 0, i);
            maxHeapify(array, 0, i);
        }
        return array;
    }
    return sort(array);
}
var st = new Date().getTime()
var result = heapSort(arr)
var ed = new Date().getTime()
var xx = ed - st
console.log('result is : ', result, '耗费时间: ' + xx + 'ms')