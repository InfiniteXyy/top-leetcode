export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }

  toString(): String {
    return `${this.val} -> ${this.next?.toString() || 'nil'}`
  }

  toArray(): number[] {
    return [this.val, ...(this.next?.toArray() || [])]
  }

  static fromArray(arr: number[]): ListNode | null {
    if (arr.length === 0) return null
    const head = new ListNode(arr[0])
    let current = head
    for (let i = 1; i < arr.length; i++) {
      current.next = new ListNode(arr[i])
      current = current.next
    }
    return head
  }
}
