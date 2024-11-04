import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, MessageCircle, Calendar, BookOpen } from 'lucide-react';

const HomeScreen = () => (
  <SafeAreaView style={styles.screenContainer}>
    <Text style={styles.screenText}>Home Screen</Text>
  </SafeAreaView>
);

const MessagesScreen = () => (
  <SafeAreaView style={styles.screenContainer}>
    <Text style={styles.screenText}>Messages Screen</Text>
  </SafeAreaView>
);

const AppointmentsScreen = () => (
  <SafeAreaView style={styles.screenContainer}>
    <Text style={styles.screenText}>Appointments Screen</Text>
  </SafeAreaView>
);

const ArticlesScreen = () => (
  <SafeAreaView style={styles.screenContainer}>
    <Text style={styles.screenText}>Articles Screen</Text>
  </SafeAreaView>
);

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor: '#7B61FF',
          tabBarInactiveTintColor: '#6B7280',
          tabBarShowLabel: true,
          tabBarLabelStyle: styles.tabLabel,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Home size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Messages"
          component={MessagesScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MessageCircle size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Appointments"
          component={AppointmentsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Calendar size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Articles"
          component={ArticlesScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <BookOpen size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    paddingBottom: 5,
    paddingTop: 5,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E8ECF4',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 0,
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F8F9',
  },
  screenText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
  },
});

export default AppNavigator;