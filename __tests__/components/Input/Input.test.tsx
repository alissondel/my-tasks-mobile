import React from 'react'
import { render } from '@testing-library/react-native'

import Input from '../../../src/components/Input'

describe('Input Component', () => {
  it('renders correctly', () => {
    const fakeValue = 'qualquercoisa'
    const fakeFn = jest.fn()
    const { getByPlaceholderText } = render(
      <Input newTask={fakeValue} setNewTasks={fakeFn} />,
    )
    const inputNewTask = getByPlaceholderText('Nova tarefa...')
    // console.log('inputNewTask: ', inputNewTask)

    expect(inputNewTask).toBeDefined()
    expect(inputNewTask.props.placeholder).toBeTruthy()
  })
})
