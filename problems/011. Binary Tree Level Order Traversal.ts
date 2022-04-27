import { TreeNode } from '~/data-structure'

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return []
  const result: number[][] = []
  const queue = [root]
  while (queue.length) {
    let length = queue.length
    const level: number[] = []
    for (let i = 0; i < length; i++) {
      const current = queue.shift()!
      level.push(current.val)
      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)
    }
    result.push(level)
  }
  return result
}

describe('102. Binary Tree Level Order Traversal', () => {
  it('should root = [3,9,20,null,null,15,7] return [[3],[9,20],[15,7]]', () => {
    expect(levelOrder(TreeNode.fromArray([3, 9, 20, null, null, 15, 7]))).toEqual([[3], [9, 20], [15, 7]])
  })
})
