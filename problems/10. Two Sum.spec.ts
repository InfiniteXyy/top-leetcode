function twoSum(nums: number[], target: number): number[] {
  const map: Map<number, number> = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) return [map.get(target - nums[i])!, i]
    map.set(nums[i], i)
  }
  return [-1]
}

describe('1. Two Sum', () => {
  it('should nums = [2, 7, 11, 15] target = 9 return [0, 1]', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
  })
})
