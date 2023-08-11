import React from 'react'
import { render } from '@testing-library/react-native'

import Button from '../../../src/components/Button'

describe('Button Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <Button text={'adicionar'} color={'red'} onClick={jest.fn()} />,
    )
    const btn = getByText('adicionar')
    // console.log('btn: ', btn)

    expect(btn).toBeDefined()
  })

  it('Check if the button defined', () => {
    const fakeText = 'adicionar'
    const fakeColor = 'red'
    const fakeFn = jest.fn()

    const { getByTestId } = render(
      <Button text={fakeText} color={fakeColor} onClick={fakeFn} />,
    )

    const btn = getByTestId('textButton')

    expect(btn).toBeDefined()
  })
})
