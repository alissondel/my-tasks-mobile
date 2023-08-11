import { StatusBar } from 'expo-status-bar'
import Home from '../src/screens/Home'

import { TasksProvider } from '../src/context/TasksContext'

export default function App() {
  return (
    <TasksProvider>
      <Home />
      <StatusBar style="auto" />
    </TasksProvider>
  )
}
