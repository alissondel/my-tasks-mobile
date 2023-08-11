describe('Not method', () => {
  it('Use basic - not', () => {
    expect(1 + 1).not.toEqual(3)
    expect('developer').not.toEqual('devops')
    expect({ name: 'developer' }).not.toEqual({ name: 'devops' })
    expect(['developer', 'devops']).not.toEqual(['devops', 'developer'])
  })
})

describe('Match - expressoes regulares', () => {
  it('Uso basico - toMatch', () => {
    expect('developer').toMatch(/\w+/)
  })
})
