import { useState, createContext, ReactNode, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export interface TaskData {
  id: string
  title: string
}

export interface TasksContextData {
  tasks: TaskData[]
  addTask(task: TaskData): void
  removeTask(id: string): void
  removeAllTask(): void
}

interface TasksProviderProps {
  children: ReactNode
}

const tasksData = 'myKeyTasks'

export const TasksContext = createContext<TasksContextData>(
  {} as TasksContextData,
)

export const TasksProvider = ({ children }: TasksProviderProps) => {
  const [data, setData] = useState<TaskData[]>([])

  useEffect(() => {
    loadTasks()
  }, [])

  async function loadTasks() {
    const taskList = await AsyncStorage.getItem(tasksData)

    if (taskList) {
      setData(JSON.parse(taskList))
    }
  }

  async function addTask(task: TaskData) {
    try {
      const newTaskList = [...data, task]
      setData(newTaskList)
      await AsyncStorage.setItem(tasksData, JSON.stringify(newTaskList))
    } catch (error) {
      throw new Error(error as string)
    }
  }

  async function removeTask(id: string) {
    const newTaskList = data.filter((task) => task.id !== id)
    setData(newTaskList)
    await AsyncStorage.setItem(tasksData, JSON.stringify(newTaskList))
  }

  async function removeAllTask() {
    setData([])
    await AsyncStorage.setItem(tasksData, JSON.stringify([]))
  }

  return (
    <TasksContext.Provider
      value={{ tasks: data, addTask, removeTask, removeAllTask }}
    >
      {children}
    </TasksContext.Provider>
  )
}
