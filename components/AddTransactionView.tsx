import { Text, TouchableOpacity, View } from 'react-native';
import InputComponent from './InputComponent';
import DropDown from './DropDown';
import { useEffect, useState } from 'react';
import ButtonSwich from './ButtonSwich';

const AddTransactionView = () => {
  const [itemsCategory, setItemsCategory] = useState<string[]>([]);
  const [type, setType] = useState<'Pemasukan' | 'Pengeluaran'>('Pengeluaran');

  useEffect(() => {
    type === "Pemasukan" ? setItemsCategory(["Kiriman"]):setItemsCategory(['Makanan', 'Minum', 'Transportasi', 'Kesehatan', 'Lainnya'])
  }, [type]);

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
