// ButtonSwitch.tsx
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

type TransactionType = 'Pemasukan' | 'Pengeluaran';

interface ButtonSwitchProps {
  type: TransactionType;
  onChange: (t: TransactionType) => void;
}

const ButtonSwitch: React.FC<ButtonSwitchProps> = ({ type, onChange }) => {
  return (
    <View className="flex-row bg-gray-100 rounded-xl p-1 mb-5">
      <TouchableOpacity
        onPress={() => onChange('Pemasukan')}
        className={`flex-1 rounded-lg py-3 items-center ${type === 'Pemasukan' ? 'bg-violet-600' : ''}`}
        activeOpacity={0.8}
      >
        <Text className={`${type === 'Pemasukan' ? 'text-white font-semibold' : 'text-gray-500'}`}>
          Pemasukan
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onChange('Pengeluaran')}
        className={`flex-1 rounded-lg py-3 items-center ${type === 'Pengeluaran' ? 'bg-violet-600' : ''}`}
        activeOpacity={0.8}
      >
        <Text className={`${type === 'Pengeluaran' ? 'text-white font-semibold' : 'text-gray-500'}`}>
          Pengeluaran
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonSwitch;
