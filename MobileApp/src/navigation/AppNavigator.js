import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

// Import your screens for the bottom tab navigator
import HomeScreen from "../screens/HomeScreen/HomeScreen.js";
import MessagesScreen from "../screens/MessagesScreen/MessageScreen.js";
import AppointmentsScreen from '../screens/AppointmentsScreen/AppointmentsScreen.js';
import ArticlesScreen from '../screens/ArticlesScreen/ArticlesScreen.js';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          paddingBottom: 5,
          paddingTop: 5,
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#E8ECF4',
        },
        tabBarActiveTintColor: '#7B61FF',
        tabBarInactiveTintColor: '#6B7280',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="chatbubbles" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Appointments"
        component={AppointmentsScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="calendar" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Articles"
        component={ArticlesScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="newspaper" size={24} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
