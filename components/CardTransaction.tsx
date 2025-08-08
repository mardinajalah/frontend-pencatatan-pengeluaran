import { ReactNode } from 'react';
import { Text, View } from 'react-native';

interface PropsTypeCardTransaction {
  children: ReactNode;
  kategori: string;
  deskripsi: string;
  harga: string;
  jam: string;
  color: string
}

const CardTransaction = ({ children, kategori, deskripsi, harga, jam, color }: PropsTypeCardTransaction) => {
  return (
    <View className='flex-row items-center gap-3'>
      {children}
      <View className='flex-row flex-1 items-center justify-between'>
        <View>
          <Text className='font-semibold'>{kategori}</Text>
          <Text className='text-sm'>{deskripsi}</Text>
        </View>
        <View>
          <Text className={`${color} font-semibold`}>{harga}</Text>
          <Text className='text-sm text-right'>{jam}</Text>
        </View>
      </View>
    </View>
  );
};

export default CardTransaction;
