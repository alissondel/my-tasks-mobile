import { useState } from 'react'
import { View, Text, SafeAreaView, Alert } from 'react-native'

// IMPORT COMPONENTS
import List from '../../components/List'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useTasks } from '../../hooks/useTasks'

export default function Home() {
  const [newTask, setNewTasks] = useState<string>('')
  const { addTask, removeAllTask } = useTasks()

  function handleAddNewTask() {
    const data = {
      id: String(new Date().getTime()),
      title: newTask || 'Task empty',
    }

    setNewTasks('')
    addTask(data)
  }

  function handleRemoveAll() {
    setNewTasks('')
    Alert.alert('Tem certeza?', 'Deseja realmente excluir a tarefa?', [
      {
        text: 'Cancelar',
        onPress: () => {}, //eslint-disable-line
      },
      {
        text: 'Excluir',
        onPress: () => removeAllTask(),
      },
    ])
  }

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 px-8 py-10 bg-[#121214]">
        <Text className="font-semibold text-xl text-white">
          Bem vindo, Dev!
        </Text>
        <Input newTask={newTask} setNewTasks={setNewTasks} />
        <Button
          text="Adicionar"
          color="bg-blue-500"
          onClick={handleAddNewTask}
        />
        <Button
          text="Remover Tudo"
          color="bg-red-500"
          onClick={handleRemoveAll}
        />
        <Text className="py-4 text-start font-semibold text-2xl text-white">
          Minhas tarefas
        </Text>
        <List />
      </View>
    </SafeAreaView>
  )
}
