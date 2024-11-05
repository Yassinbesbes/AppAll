import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const MessagesScreen = () => (
  <SafeAreaView style={styles.screenContainer}>
    <Text style={styles.screenText}>Messages Screen</Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
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

export default MessagesScreen;
