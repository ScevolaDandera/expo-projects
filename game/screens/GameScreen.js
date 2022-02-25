import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

export const GameScreen = () => {

  return (
    <View style={styles.container}>
      <Text>Game Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
