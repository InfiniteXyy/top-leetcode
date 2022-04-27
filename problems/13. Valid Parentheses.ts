function isValid(s: string): boolean {
  const stack = []

  const match = { '(': ')', '[': ']', '{': '}' }

  for (const char of [...s]) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char)
    } else {
      const top = stack.pop()
      if (match[top as keyof typeof match] !== char) return false
    }
  }
  return stack.length === 0
}

describe('20. Valid Parentheses', () => {
  it("s = '()' => true", () => {
    expect(isValid('()')).toBeTruthy()
  })
  it("s = '()[]{}' => true", () => {
    expect(isValid('()[]{}')).toBeTruthy()
  })
  it("s = '([)]' => false", () => {
    expect(isValid('([)]')).toBeFalsy()
  })
  it("s = '{[]}' => true", () => {
    expect(isValid('{[]}')).toBeTruthy()
  })
})
