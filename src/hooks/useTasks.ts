import { useContext } from 'react'

import { TasksContext, TasksContextData } from '../context/TasksContext'

export const useTasks = (): TasksContextData => {
  const context = useContext(TasksContext)

  if (!context) {
    throw new Error('useTasks deve ser usado dentro de um JwtProvider')
  }

  return context
}
