import { Text, TouchableOpacity, View } from 'react-native';
import InputComponent from './InputComponent';
import DropDown from './DropDown';
import { useState } from 'react';
import ButtonSwich from './ButtonSwich';

const AddTransactionView = () => {
  const itemsCategory = ['Kiriman', 'Makanan', 'Minum', 'Transportasi', 'Kesehatan', 'Lainnya'];
  const [type, setType] = useState<'Pemasukan' | 'Pengeluaran'>('Pengeluaran');
  return (
    <View>
      <ButtonSwich type={type} onChange={setType} />
      <View className='flex gap-2'>
        <DropDown title='kategori' items={itemsCategory} />
        <InputComponent
          category='Deskripsi'
          placeholder='masukan deskripsi....'
        />
        <InputComponent
          category='harga'
          placeholder='masukan jumlah harga....'
        />
      </View>
      <TouchableOpacity className='bg-violet-600 rounded-lg py-3 mt-5'>
        <Text className='text-center text-white font-semibold'>Tambah</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTransactionView;
