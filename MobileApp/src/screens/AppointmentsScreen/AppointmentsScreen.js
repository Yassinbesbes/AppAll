import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const AppointmentsScreen = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.text}>Appointments Screen</Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F8F9',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default AppointmentsScreen;







