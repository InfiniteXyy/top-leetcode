function search(nums: number[], target: number): number {
  let left = 0
  let right = nums.length
  while (left < right) {
    const mid = Math.floor((left + right) / 2)

    const isSameSide = nums[0] <= nums[mid] === nums[0] <= target
    const x = isSameSide ? nums[mid] : nums[0] <= nums[mid] ? -Number.MAX_VALUE : Number.MAX_VALUE
    if (target === x) return mid
    if (x < target) left = mid + 1
    else right = mid
  }

  return nums[left] === target ? left : -1
}

describe.skip('Search in Rotated Sorted Array')
