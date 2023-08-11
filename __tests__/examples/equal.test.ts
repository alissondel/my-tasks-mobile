describe('toBe vs toEqual ', () => {
  it('Use basic - toBe', () => {
    expect(1 + 1).toBe(2)
    expect('developer').toBe('developer')
    // expect({ name: 'developer' }).toBe({ name: 'developer' })
    // expect(['developer', 'devops']).toBe(['developer', 'devops'])
  })

  it('Use basic - toEqual', () => {
    expect(1 + 1).toEqual(2)
    expect('developer').toEqual('developer')
    expect({ name: 'developer' }).toEqual({ name: 'developer' })
    expect(['developer', 'devops']).toEqual(['developer', 'devops'])
  })
})
