import { Platform, TextInput } from 'react-native'

interface InputProps {
  newTask: string
  setNewTask: (text: string) => void
}

export default function Input({ newTask, setNewTask }: InputProps) {
  return (
    <TextInput
      value={newTask}
      onChangeText={setNewTask}
      placeholder="Nova tarefa..."
      placeholderTextColor="#555"
      className={`bg-[#29292e] text-white text-base px-2 mt-8 rounded-md ${
        Platform.OS === 'ios' ? 'py-1' : 'py-2'
      }`}
    />
  )
}
