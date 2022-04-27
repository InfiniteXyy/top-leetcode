import _ from 'lodash'

function threeSum(nums: number[]): number[][] {
  const result: number[][] = []
  nums = _.sortBy(nums)
  for (let i = 0; i < nums.length; i++) {
    // nums[i] === nums[i-1] means what [i-1] did will be duplicated in [i],  so bypass it.
    if (i !== 0 && nums[i] === nums[i - 1]) continue
    let left = i + 1
    let right = nums.length - 1
    const target = -nums[i]
    while (left < right) {
      if (nums[left] + nums[right] < target) {
        left += 1
      } else if (nums[left] + nums[right] > target) {
        right -= 1
      } else {
        const newItem = [i, left, right].map((index) => nums[index])
        if (!result.length || !_.isEqual(result[result.length - 1], newItem)) {
          result.push(newItem)
        }
        right -= 1
      }
    }
  }
  return result
}

describe('15. 3Sum', () => {
  it('should nums = [] return []', () => {
    expect(threeSum([])).toEqual([])
  })

  it('should nums = [0] return []', () => {
    expect(threeSum([0])).toEqual([])
  })

  it('should nums = [-1, 0, 1, 2, -1, -4] return [[-1, -1, 2], [-1, 0, 1]]', () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ])
  })
})
