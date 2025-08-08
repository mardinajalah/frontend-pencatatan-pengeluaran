import { Tabs } from 'expo-router';
import { House, Plus, UserRound } from 'lucide-react-native';
import { View } from 'react-native';

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          marginHorizontal: '5%',
          position: 'absolute',
          bottom: 11,
          backgroundColor: 'white',
          borderRadius: 15,
        },
        tabBarItemStyle: {
          marginTop: 13.5,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarIconStyle: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          tabBarIcon: ({ color, size }) => (
            <House
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='addTrasaction'
        options={{
          tabBarIcon: ({ size }) => (
            <View className='bg-blue-500 p-3 rounded-full'>
              <Plus
                color='#fff'
                size={size}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name='accaunt'
        options={{
          tabBarIcon: ({ color, size }) => (
            <UserRound
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
