describe('Compare numbers ', () => {
  it('Use basic - toBeGreaterThan (1 + 1 > VALOR)', () => {
    expect(1 + 1).toBeGreaterThan(1)
  })
  it('Use basic - toBeGreaterThanOrEqual (1 + 1 >= VALOR)', () => {
    expect(1 + 1).toBeGreaterThanOrEqual(1)
  })
  it('Use basic - toBeLessThan (1 + 1 < VALOR)', () => {
    expect(1 + 1).toBeLessThan(3)
  })
  it('Use basic - toBeLessThanOrEqual (1 + 1 <= VALOR', () => {
    expect(1 + 1).toBeLessThanOrEqual(2)
  })
})

describe('Mock ', () => {
  it('Mock implementation', () => {
    const fakeAdd = jest.fn().mockImplementation((a: any, b: any) => a + b)
    expect(fakeAdd(2, 3)).toEqual(5)
  })
})
