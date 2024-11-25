import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "../screens/HomeScreen/HomeScreen.js";
import SearchScreen from "../screens/SearchScreen/SearchScreen.js";
import ArticlesScreen from "../screens/ArticlesScreen/ArticlesScreen.js";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen.js";

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
          backgroundColor: "#FFFFFF",
          borderTopWidth: 1,
          borderTopColor: "#E8ECF4",
        },
        tabBarActiveTintColor: "#7B61FF",
        tabBarInactiveTintColor: "#6B7280",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Articles"
        component={ArticlesScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="newspaper" size={24} color={color} />
          ),
        }}
      />

      
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
