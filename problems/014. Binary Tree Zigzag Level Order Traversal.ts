import { TreeNode } from '~/data-structure'

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (root === null) return []
  const queue = [root]
  const result: number[][] = []

  while (queue.length) {
    const level: number[] = []
    const length = queue.length
    for (let i = 0; i < length; i++) {
      const current = queue.shift()!
      level.push(current.val)
      current.left && queue.push(current.left)
      current.right && queue.push(current.right)
    }
    if (result.length % 2 === 1) level.reverse()
    result.push(level)
  }

  return result
}

describe('103. Binary Tree Zigzag Level Order Traversal', () => {
  it('root = [3,9,20,null,null,15,7] => [[3],[20,9],[15,7]]', () => {
    const root = TreeNode.fromArray([3, 9, 20, null, null, 15, 7])
    expect(zigzagLevelOrder(root)).toEqual([[3], [20, 9], [15, 7]])
  })
})
