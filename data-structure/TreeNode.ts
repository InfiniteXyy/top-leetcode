export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number | null, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val ?? 0
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }

  static fromArray(list: (number | null)[]): TreeNode | null {
    if (!list.length) return null
    const root = new TreeNode(list[0])
    const queue = [root]
    let index = 1
    while (true) {
      const current = queue.shift()
      if (!current) break
      if (list[index]) {
        current.left = new TreeNode(list[index])
        queue.push(current.left)
      }
      if (list[index + 1]) {
        current.right = new TreeNode(list[index + 1])
        queue.push(current.right)
      }
      index += 2
    }
    return root
  }

  toArray(): number[] {
    const result: number[] = []
    const queue: TreeNode[] = [this]
    while (queue.length) {
      const current = queue.shift()
      if (!current) break
      result.push(current.val)
      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)
    }
    return result
  }
}
