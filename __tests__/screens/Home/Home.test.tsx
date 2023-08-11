import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import { renderHook, act } from '@testing-library/react-hooks'

import Home from '../../../src/screens/Home'
import { useTasks } from '../../../src/hooks/useTasks'
import { TasksProvider } from '../../../src/context/TasksContext'

import Button from '../../../src/components/Button'
import Input from '../../../src/components/Input'

describe('Home Page', () => {
  it('Renders correctly', () => {
    render(<Home />)
  })

  it('Checks the insertion of an item in the task list', async () => {
    const { result } = renderHook(() => useTasks(), {
      wrapper: TasksProvider,
    })

    const data = { id: '1', title: 'Task' }
    await act(() => result.current.addTask(data))

    expect(result.current.tasks).toBeTruthy()
  })

  it('checks if the click on the button insert an item in the task list', async () => {
    const { result } = renderHook(() => useTasks(), {
      wrapper: TasksProvider,
    })

    const { getByPlaceholderText } = render(
      <Input newTask={'tarefa01'} setNewTask={jest.fn()} />,
    )

    const { getByText } = render(
      <Button text={'adicionar'} color={'red'} onClick={jest.fn()} />,
    )

    const input = getByPlaceholderText('Nova tarefa...')
    const button = getByText('adicionar')

    const data = { id: '1', title: 'Task' }

    act(() => fireEvent.changeText(input, data.title))

    await act(async () => {
      await fireEvent.press(button)
    })

    expect(result.current.tasks).toBeTruthy()
  })
})
