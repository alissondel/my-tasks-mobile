describe('Calculator', () => {
  it('Add Numbers', () => {
    const fakeAdd = jest.fn().mockImplementation((a, b) => a + b)
    expect(fakeAdd(1, 1)).toEqual(2)
  })
})
