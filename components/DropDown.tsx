import { ChevronDown, ChevronUp } from 'lucide-react-native';
import { useState } from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';

interface PropsTypeDropDown {
  title: string;
  items: string[];
}

const DropDown = ({title, items}: PropsTypeDropDown) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string>('');

  return (
    <View className='relative'>
      <Text className='mb-1 text-gray-700 text-lg font-semibold'>{title}</Text>

      {/* Tombol Utama */}
      <TouchableOpacity
        onPress={() => setIsOpen((prev) => !prev)}
        className='flex-row items-center justify-between border border-gray-300 rounded-lg px-4 py-3'
      >
        <Text className={`${selected ? 'text-gray-800' : 'text-gray-500'}`}>{selected || 'Pilih kategori.... '}</Text>
        {isOpen ? <ChevronUp color='#6b7280' /> : <ChevronDown color='#6b7280' />}
      </TouchableOpacity>

      {/* Dropdown List */}
      {isOpen && (
        <View className='absolute mt-3 bg-white border border-gray-300 rounded-lg top-20 left-0 right-0 shadow-lg z-10'>
          {items.map((item, index) => (
            <Pressable
              key={index}
              android_ripple={{ color: '#ddd' }}
              onPress={() => {
                setSelected(item);
                setIsOpen(false);
              }}
              className='px-4 py-3'
            >
              <Text className='text-gray-800'>{item}</Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
};

export default DropDown;
