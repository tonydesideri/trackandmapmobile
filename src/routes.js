import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './pages/Welcome';
import Register from './pages/Register';
import CheckNumber from './pages/CheckNumber';
import Agreement from './pages/Agreement';
import Permission from './pages/Permission';
import Home from './pages/Home';
import ChatBot from './pages/ChatBot';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          title: 'Cadastro',
          headerShown: true,
          headerTintColor: '#000000',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="CheckNumber"
        component={CheckNumber}
        options={{
          title: 'Código',
          headerShown: true,
          headerTintColor: '#000000',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Agreement"
        component={Agreement}
        options={{
          title: 'Termo de consentimento',
          headerShown: true,
          headerTintColor: '#000000',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Permission"
        component={Permission}
        options={{
          title: 'Permissões',
          headerShown: true,
          headerTintColor: '#000000',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          headerTintColor: '#000000',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}
