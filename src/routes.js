import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Welcome from './pages/Welcome';
import Register from './pages/Register';
import CheckNumber from './pages/CheckNumber';
import Agreement from './pages/Agreement';
import Permission from './pages/Permission';
import Home from './pages/Home';
import ChatBot from './pages/ChatBot';
import Alert from './pages/Alert';
import Location from './pages/Location';
import Setting from './pages/Setting';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const PageTabScreen = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: '#5440AF',
      inactiveTintColor: '#CAC6EF',
    }}>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ focused }) => {
          return focused ? (
            <Icon name="home" size={30} color="#5440AF" />
          ) : (
            <Icon name="home" size={30} color="#CAC6EF" />
          );
        },
        title: 'Inicio',
      }}
    />
    <Tab.Screen
      name="ChatBot"
      component={ChatBot}
      options={{
        tabBarIcon: ({ focused }) => {
          return focused ? (
            <Icon name="chat" size={30} color="#5440AF" />
          ) : (
            <Icon name="chat" size={30} color="#CAC6EF" />
          );
        },
        title: 'Chat Bot',
      }}
    />
    <Tab.Screen
      name="Alert"
      component={Alert}
      options={{
        tabBarIcon: ({ focused }) => {
          return focused ? (
            <Icon name="alert" size={30} color="#5440AF" />
          ) : (
            <Icon name="alert" size={30} color="#CAC6EF" />
          );
        },
        title: 'Alertas',
      }}
    />
    <Tab.Screen
      name="Location"
      component={Location}
      options={{
        tabBarIcon: ({ focused }) => {
          return focused ? (
            <Icon name="map-marker" size={30} color="#5440AF" />
          ) : (
            <Icon name="map-marker" size={30} color="#CAC6EF" />
          );
        },
        title: 'Mapa',
      }}
    />
    <Tab.Screen
      name="Setting"
      component={Setting}
      options={{
        tabBarIcon: ({ focused }) => {
          return focused ? (
            <Icon name="settings" size={30} color="#5440AF" />
          ) : (
            <Icon name="settings" size={30} color="#CAC6EF" />
          );
        },
        title: 'Settings',
      }}
    />
  </Tab.Navigator>
);

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
        component={PageTabScreen}
        options={{
          headerShown: false,
          headerTintColor: '#000000',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Alert"
        component={PageTabScreen}
        options={{
          title: 'Alerta',
          headerShown: true,
          headerTintColor: '#000000',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}
