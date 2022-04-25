function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0 || s.length === 1) return s.length
  const appearIndex: Record<string, number> = {}
  let left = 0
  let right = 0
  let maxLength = 0

  while (right < s.length) {
    const char = s[right]
    // means that the char at index right has already be taken
    // then plus left until the char here is removed
    while (char in appearIndex) {
      delete appearIndex[s[left]]
      left++
    }
    appearIndex[s[right]] = right
    right++
    maxLength = Math.max(maxLength, right - left)
  }

  return maxLength
}

describe('3. Longest Substring Without Repeating Characters', () => {
  it('should "abcabcbb" return 3', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3)
  })

  it('should "bbbbb" return 1', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toEqual(1)
  })

  it('should "pwwkew" return 3', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toEqual(3)
  })
})
