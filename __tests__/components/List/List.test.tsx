import { render } from '@testing-library/react-native'
import { renderHook, act } from '@testing-library/react-hooks'

import List from '../../../src/components/List'
import { useTasks } from '../../../src/hooks/useTasks'
import { TasksProvider } from '../../../src/context/TasksContext'

describe('Task List Component', () => {
  it('Checks if the item is removed from the list ', async () => {
    render(<List />)

    const { result } = renderHook(() => useTasks(), {
      wrapper: TasksProvider,
    })

    const data = { id: '1', title: 'Task' }

    await act(() => result.current.addTask(data))
    expect(result.current.tasks[0].title).toEqual('Task')

    await act(() => result.current.removeTask(data.id))
    expect(result.current.tasks.length).toEqual(0)
  })
})
