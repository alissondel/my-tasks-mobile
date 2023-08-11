import { Text, FlatList, TouchableOpacity, Alert } from 'react-native'
import { useTasks } from '../../hooks/useTasks'
import { TaskData } from '../../context/TasksContext'

export default function List() {
  const { tasks, removeTask } = useTasks()

  function handleRemoveTask(id: string) {
    Alert.alert('Tem certeza?', 'Deseja realmente excluir a tarefa?', [
      {
        text: 'Cancelar',
        onPress: () => {}, //eslint-disable-line
      },
      {
        text: 'Excluir',
        onPress: () => removeTask(id),
      },
    ])
  }

  return (
    <FlatList
      data={tasks as unknown as TaskData[]}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => handleRemoveTask(item.id)}
          activeOpacity={0.7}
          className="bg-[#29292e] py-2 px-2 mt-4 rounded-md items-center"
        >
          <Text className="text-white text-xl font-semibold">{item.title}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
    />
  )
}
