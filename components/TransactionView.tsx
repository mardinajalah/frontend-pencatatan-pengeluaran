import { ReactNode } from 'react';
import { Text, View } from 'react-native';

interface PropsTypeTransactionView {
  hari: string;
  total: string;
  children: ReactNode;
}

const TransactionView = ({hari, total, children}: PropsTypeTransactionView) => {
  return (
    <>
      <View className='flex-row justify-between'>
        <Text className='font-semibold text-gray-700'>{hari}</Text>
        <Text className='text-red-700 font-semibold'>{total}</Text>
      </View>
      <View>
        {children}
      </View>
    </>
  );
};

export default TransactionView;
