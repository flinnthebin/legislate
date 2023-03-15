import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';

import Login from './screens/Login';
import Bills from './screens/Bills';
import Sent from './screens/Sent';
import Profile from './screens/Profile';
import Whitepaper from './screens/Whitepaper';
import Legislation from './screens/Legislation';

export type RootStackParamList = {
  Login: {};
  BillStack: {},
  Bills: {};
  Sent: {};
  Profile: {};
  Whitepaper: {};
  Legislation: {};
};


const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = '';

          if (route.name === 'Bills') {
            iconName = focused ? 'list' : 'list';
          } else if (route.name === 'Sent') {
            iconName = focused ? 'paper-plane' : 'paper-plane';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person';
          } else if (route.name === 'Whitepaper') {
            iconName = focused ? 'finger-print' : 'finger-print';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarStyle: styles.footer,
      })}
    >
      <Tab.Screen name="Bills" component={Bills} />
      <Tab.Screen name="Sent" component={Sent} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Whitepaper" component={Whitepaper} />
    </Tab.Navigator>
  );
}


function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: styles.header,
          headerTintColor: 'white',
          headerTitleStyle: styles.headerTitle,
        }}
      >
        <Stack.Screen name="Login" component={Login} options={{ title: 'legislate.me', headerShown: false }} />
        <Stack.Screen name="BillStack" component={TabNavigator} options={{ title: 'legislate.me' }} />
        <Stack.Screen name="Legislation" component={Legislation} options={{ title: 'legislate.me' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
