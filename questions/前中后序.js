
function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}
/**
 * 前序
 * 根结点 ---> 左子树 ---> 右子树
 * 1  2  4  5  7  8  3  6 
 * 递归: 左 -> 右
 * 非递归
 */
function frontTrack(root) {
  const trackList = []
  const trackNodes = []
  while (root !== null || !trackList.length) {
    if (root !== null) {
      trackList.push(root.val)
      trackNodes.push(root)
      root = root.left
    } else {
      const node = trackNode.pop()
      root = node.right
    }    
  }
  return trackList
}

console.log('fontTrack is => ');

/**
 * 中序
 * 左子树---> 根结点 ---> 右子树
 * 4  2  7  5  8  1  3  6
 */
function middleTrack() {}

/**
 * 后序
 * 左子树 ---> 右子树 ---> 根结点
 * 4  7  8  5  2  6  3  1
 */
function endTrack() {}

/**
 * 层次遍历
 * 只需按层次遍历即可
 * 1  2  3  4  5  6  7  8
 */
 function levelTrack() {}
