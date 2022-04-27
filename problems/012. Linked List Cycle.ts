import { ListNode } from '~/data-structure'

function hasCycle(head: ListNode | null): boolean {
  let slow = head
  let fast = head
  while (slow && fast) {
    slow = slow.next
    fast = fast.next?.next!
    if (fast === slow) return true
  }
  return false
}

describe('141. Linked List Cycle', () => {
  it('head = [3,2,0,-4], pos = 1=> true', () => {
    const queue = ListNode.fromArray([3, 2, 0, -4])
    const last = queue?.next?.next?.next!
    last.next = queue?.next!
    expect(hasCycle(queue)).toBeTruthy()
  })
})
