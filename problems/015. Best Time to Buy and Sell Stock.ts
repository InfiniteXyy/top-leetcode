function maxProfit(prices: number[]): number {
  let max = 0

  const maxValueList: number[] = []

  for (let i = prices.length - 1; i >= 0; i--) {
    maxValueList[i] = Math.max(maxValueList[i + 1] ?? 0, prices[i])
  }

  for (let i = 0; i < prices.length; i++) {
    const currentValue = prices[i]
    const maxValue = maxValueList[i]
    max = Math.max(max, maxValue - currentValue)
  }
  return max
}

describe('121. Best Time to Buy and Sell Stock', () => {
  it('prices = [7,1,5,3,6,4] => 5', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5)
  })
})
