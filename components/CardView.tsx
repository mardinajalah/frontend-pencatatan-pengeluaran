import { Text, View } from 'react-native';

interface PropsTypeCardView {
  title: string;
  uang: string;
}

const CardView = ( {title, uang}: PropsTypeCardView ) => {
  return (
    <View className='border border-gray-600 rounded-xl p-3 flex-1'>
      <Text className='text-gray-700'>{title}</Text>
      <Text className='text-xl font-bold'>{uang}</Text>
    </View>
  );
};

export default CardView;
