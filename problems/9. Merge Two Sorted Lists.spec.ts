import { ListNode } from '~/data-structure'

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let head = new ListNode(0)
  let cur = head
  while (list1 && list2) {
    const smaller = list1.val < list2.val ? list1 : list2
    if (smaller === list1) list1 = list1.next
    else list2 = list2.next
    cur.next = smaller
    cur = smaller
  }
  cur.next = list1 || list2
  return head.next
}

describe('21. Merge Two Sorted Lists', () => {
  it('should return [1,1,2,3,4,4] for [1,2,4] and [1,3,4]', () => {
    expect(mergeTwoLists(ListNode.fromArray([1, 2, 4]), ListNode.fromArray([1, 3, 4]))?.toArray()).toEqual([
      1, 1, 2, 3, 4, 4,
    ])
  })
})
