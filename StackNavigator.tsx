import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';

import Login from './screens/Login';
import Categories from './screens/Categories';
import Legislation from './screens/Legislation';
import BillDetails from './screens/BillDetails';
import EmailSent from './screens/EmailSent';
import Error from './screens/Error';
import About from './screens/About';

export type RootStackParamList = {
  Login: {};
  Categories: {};
  Legislation: {};
  BillDetails: {};
  EmailSent: {};
  Error: {};
  About: {};
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
      <Tab.Screen name="Bills" component={Categories} />
      <Tab.Screen name="Sent" component={Error} />
      <Tab.Screen name="Profile" component={Error} />
      <Tab.Screen name="Whitepaper" component={Error} />
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
        <Stack.Screen name="Categories" component={TabNavigator} options={{ title: 'legislate.me' }} />
        <Stack.Screen name="Legislation" component={Legislation} options={{ title: 'legislate.me' }} />
        <Stack.Screen name="BillDetails" component={BillDetails} options={{ title: 'legislate.me' }} />
        <Stack.Screen name="EmailSent" component={EmailSent} options={{ title: 'legislate.me' }} />
        <Stack.Screen name="Error" component={Error} options={{ title: 'legislate.me' }} />
        <Stack.Screen name="About" component={About} options={{ title: 'legislate.me' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
