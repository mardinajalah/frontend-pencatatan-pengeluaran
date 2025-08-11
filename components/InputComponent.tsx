import { Text, TextInput, View } from 'react-native';

interface InputComponentProps {
  category: string;
  placeholder: string;
}

const InputComponent = ({category, placeholder}: InputComponentProps) => {
  return (
    <View>
      <Text className='mb-1 text-gray-700 text-lg font-semibold'>{category}</Text>
      <TextInput
        placeholder={placeholder}
        className='border border-gray-300 rounded-lg px-4 py-3'
        placeholderTextColor='#888'
      />
    </View>
  );
};

export default InputComponent;
