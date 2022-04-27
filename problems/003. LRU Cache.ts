class QueueNode {
  public next: QueueNode | null = null
  public prev: QueueNode | null = null
  constructor(public value: number, public key: number) {}
}

class LRUCache {
  private hashMap: Map<number, QueueNode>
  private listHead: QueueNode | null
  private listTail: QueueNode | null
  private currentSize: number
  private capacity: number

  constructor(capacity: number) {
    this.hashMap = new Map()
    this.currentSize = 0
    this.capacity = capacity
    this.listHead = null
    this.listTail = null
  }

  get(key: number): number {
    const node = this.hashMap.get(key)
    if (!node) return -1
    this.liftNode(node)
    return node.value
  }

  put(key: number, value: number): void {
    const node = this.hashMap.get(key)
    if (!node) {
      if (this.currentSize >= this.capacity) {
        this.evictFooter()
      } else {
        this.currentSize += 1
      }
      const node = new QueueNode(value, key)
      node.next = this.listHead
      this.listHead && (this.listHead.prev = node)
      this.listHead = node
      node.next === null && (this.listTail = node)
      this.hashMap.set(key, node)
    } else {
      this.liftNode(node)
      node.value = value
    }
  }

  private liftNode(node: QueueNode): void {
    if (this.listTail === node) {
      this.listTail = node.prev
      this.listTail && (this.listTail.next = null)
      this.listHead && (this.listHead.prev = node)
      node.prev = null
      node.next = this.listHead
      this.listHead = node
    } else if (this.listHead !== node) {
      this.listHead && (this.listHead.prev = node)
      node.prev && (node.prev.next = node.next)
      node.next && (node.next.prev = node.prev)
      node.next = this.listHead
      this.listHead = node
      node.prev = null
    }
  }

  private evictFooter(): void {
    this.hashMap.delete(this.listTail?.key || 0)
    if (this.listTail === this.listHead) {
      this.listTail = null
      this.listHead = null
      return
    }
    if (this.listTail?.prev) this.listTail.prev.next = null
    this.listTail = this.listTail?.prev || this.listHead
  }
}

describe('146. LRU Cache', () => {
  it('should return -1 for null', () => {
    const cache = new LRUCache(2)
    expect(cache.get(1)).toEqual(-1)
  })

  it('should return 1 for [1]', () => {
    const cache = new LRUCache(2)
    cache.put(1, 1)
    expect(cache.get(1)).toEqual(1)
  })

  it('should capacity works', () => {
    const cache = new LRUCache(2)
    cache.put(1, 1)
    cache.put(2, 2)
    cache.get(1)
    cache.put(3, 3)
    expect(cache.get(2)).toEqual(-1)
  })
})
