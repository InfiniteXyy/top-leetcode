import { ListNode } from '~/data-structure'

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  if (headA === null || headB === null) return null
  const hashMap = new Map<ListNode, boolean>()
  let currentA: ListNode | null = headA
  while (currentA) {
    hashMap.set(currentA, true)
    currentA = currentA.next
  }
  let currentB: ListNode | null = headB
  while (currentB) {
    if (hashMap.has(currentB)) {
      return currentB
    }
    currentB = currentB.next
  }
  return null
}

describe.skip('')
