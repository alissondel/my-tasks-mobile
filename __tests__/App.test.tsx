import React from 'react'
import { render } from '@testing-library/react-native'

import App from '../app/index'

describe('<App />', () => {
  it('renders correcty', () => {
    render(<App />)
  })
  it('renders correcty', () => {
    const { debug } = render(<App />)
    debug()
  })
})
