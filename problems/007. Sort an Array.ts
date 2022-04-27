function sortArray(nums: number[]): number[] {
  function swap(a: number, b: number) {
    const temp = nums[a]
    nums[a] = nums[b]
    nums[b] = temp
  }
  function quickSort(left: number, right: number) {
    if (left >= right) return
    const pivotIndex = Math.floor((left + right) / 2)
    swap(pivotIndex, right)
    let storeIndex = left
    for (let i = left; i < right; i++) {
      if (nums[i] < nums[right]) {
        swap(i, storeIndex++)
      }
    }
    swap(storeIndex, right)
    quickSort(left, storeIndex - 1)
    quickSort(storeIndex + 1, right)
  }
  quickSort(0, nums.length - 1)
  return nums
}

describe('912. Sort an Array', () => {
  it('should [5,2,3,1] return [1,2,3,5]', () => {
    expect(sortArray([5, 2, 3, 1])).toEqual([1, 2, 3, 5])
  })

  it('should [5,1,1,2,0,0] return [0,0,1,1,2,5]', () => {
    expect(sortArray([5, 1, 1, 2, 0, 0])).toEqual([0, 0, 1, 1, 2, 5])
  })
})
