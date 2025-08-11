import { saldo, transaction } from '@/assets/data';
import CardTransaction from '@/components/CardTransaction';
import CardView from '@/components/CardView';
import TransactionView from '@/components/TransactionView';
import { BanknoteArrowDown, BanknoteArrowUp, Search } from 'lucide-react-native';
import { ScrollView, Text, TextInput, View } from 'react-native';

export default function Index() {
  const formatMoney = (money: number): string => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(money);
  };
  return (
    <View className='bg-white flex-1 px-3'>
      <View className='mt-5'>
        <Text className='font-semibold text-gray-700'>Dompet</Text>
        <Text className='text-2xl font-bold text-gray-700'>Rp 292.000</Text>
      </View>
      {/* start cardView */}
      <View className='mt-10 flex-row gap-3'>
        {saldo.map((item, i) => (
          <CardView
            key={i}
            title={item.title}
            uang={formatMoney(item.money)}
          />
        ))}
      </View>
      {/* end cardView */}
      <View className='mt-10 flex-1 mb-24'>
        <Text className='text-lg font-semibold text-gray-700'>Transaksi</Text>
        {/* satrt Search */}
        <View className='flex-row items-center border border-gray-300 rounded-xl px-3 mt-2'>
          <TextInput
            placeholder='cari...'
            className='flex-1 py-3'
            placeholderTextColor='#888'
          />
          <Search
            size={20}
            color='#555'
          />
        </View>
        {/* end search */}
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          className='mt-4'
        >
          <View className='p-4'>
            {transaction.map((item, i) => (
              <TransactionView
                key={i}
                hari={item.day}
                total={`- ${formatMoney(item.total)}`}
              >
                {item.data.map((result, i) => (
                  <CardTransaction
                    key={i}
                    kategori={result.category}
                    deskripsi={result.description}
                    harga={result.category === 'Kiriman' ? `+ ${formatMoney(result.price)}` : `- ${formatMoney(result.price)}`}
                    jam={result.time}
                    color={result.category === 'Kiriman' ? 'text-green-700' : 'text-red-700'}
                  >
                    {result.category === 'Kiriman' ? (
                      <BanknoteArrowDown
                        size={50}
                        color='#555'
                      />
                    ) : (
                      <BanknoteArrowUp
                        size={50}
                        color='#555'
                      />
                    )}
                  </CardTransaction>
                ))}
              </TransactionView>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
