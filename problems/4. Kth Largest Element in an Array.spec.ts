function findKthLargest(nums: number[], k: number): number {
  if (nums.length < k) return -1
  function quickSelect(left: number, right: number): number {
    const pivot = nums[right - 1]
    let storeIndex = left
    for (let i = left; i < right - 1; i++) {
      if (nums[i] > pivot) {
        ;[nums[i], nums[storeIndex]] = [nums[storeIndex], nums[i]]
        storeIndex++
      }
    }
    ;[nums[storeIndex], nums[right - 1]] = [nums[right - 1], nums[storeIndex]]
    if (storeIndex > k - 1) return quickSelect(left, storeIndex)
    if (storeIndex < k - 1) return quickSelect(storeIndex + 1, right)
    return nums[storeIndex]
  }

  return quickSelect(0, nums.length)
}

describe('215. Kth Largest Element in an Array', () => {
  it('should return -1 for null', () => {
    expect(findKthLargest([], 1)).toEqual(-1)
  })

  it('should return 5 for [3,2,1,5,6,4] and k = 2', () => {
    expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toEqual(5)
  })

  it('should return -1 for [3,2,3,1,2,4,5,5,6] and k = 4', () => {
    expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toEqual(4)
  })
})
