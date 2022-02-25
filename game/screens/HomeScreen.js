import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
