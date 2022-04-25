import { ListNode } from '../data-structure'

function reverseList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head
  let prev: ListNode | null = null
  let current: ListNode | null = head
  while (true) {
    if (current === null) break
    const next: ListNode | null = current.next
    current.next = prev
    prev = current
    current = next
  }
  return prev
}

describe('206. Reverse Linked List', () => {
  it('should return null for null', () => {
    expect(reverseList(null)).toEqual(null)
  })

  it('should return 1 for [1]', () => {
    expect(reverseList(ListNode.fromArray([1]))?.toArray()).toEqual([1])
  })

  it('should return [5,4,3,2,1] for [1,2,3,4,5]', () => {
    expect(reverseList(ListNode.fromArray([1, 2, 3, 4, 5]))?.toArray()).toEqual([5, 4, 3, 2, 1])
  })
})
