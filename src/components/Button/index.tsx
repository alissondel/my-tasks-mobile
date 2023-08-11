import { Text, TouchableOpacity } from 'react-native'

interface ButtonProps {
  text: string
  color: string
  onClick: () => void
}

export default function Button({ text, color, onClick }: ButtonProps) {
  return (
    <TouchableOpacity
      testID="textButton"
      className={`px-2 py-2 rounded-md mt-4 ${color}`}
      activeOpacity={0.7}
      onPress={onClick}
    >
      <Text className="text-white text-center text-base font-semibold">
        {text}
      </Text>
    </TouchableOpacity>
  )
}
