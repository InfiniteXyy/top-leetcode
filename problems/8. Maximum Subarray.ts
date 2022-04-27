import _ from 'lodash'

function maxSubArray(nums: number[]): number {
  const dp = [nums[0]]
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
  }
  return _.max(dp) || -1
}

describe('53. Maximum Subarray', () => {
  it('should [-2,1,-3,4,-1,2,1,-5,4] return 6', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6)
  })
})
