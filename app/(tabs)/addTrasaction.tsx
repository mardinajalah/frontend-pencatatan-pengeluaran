import AddTransactionView from '@/components/AddTransactionView';
import { Text, View } from 'react-native';

const AddTransaction = () => {

  return (
    <View className='flex-1 bg-white p-5'>
      <Text className='text-center text-2xl font-bold mb-5 mt-5'>Tambah Transaksi</Text>
      <AddTransactionView />
    </View>
  );
};

export default AddTransaction;
