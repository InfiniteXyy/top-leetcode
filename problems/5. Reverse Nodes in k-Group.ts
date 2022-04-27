import { ListNode } from '~/data-structure'

function reverseList(head: ListNode): ListNode {
  let prev: ListNode | null = null
  let cur = head
  while (cur) {
    const next = cur.next!
    cur.next = prev
    ;[prev, cur] = [cur, next]
  }
  return prev!
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (head === null || head.next === null) return head
  let tail = head
  for (let i = 0; i < k - 1; i++) {
    tail = tail.next!
    if (tail === null) return head
  }
  const next = tail.next
  tail.next = null
  reverseList(head)
  head.next = reverseKGroup(next, k)
  return tail
}

describe('25. Reverse Nodes in k-Group', () => {
  it('should head = [1,2,3,4,5], k = 2 return [2,1,4,3,5]', () => {
    expect(reverseKGroup(ListNode.fromArray([1, 2, 3, 4, 5]), 2)?.toArray()).toEqual([2, 1, 4, 3, 5])
  })

  it('should head = [1,2,3,4,5], k = 3 return [3,2,1,4,5]', () => {
    expect(reverseKGroup(ListNode.fromArray([1, 2, 3, 4, 5]), 3)?.toArray()).toEqual([3, 2, 1, 4, 5])
  })
})
