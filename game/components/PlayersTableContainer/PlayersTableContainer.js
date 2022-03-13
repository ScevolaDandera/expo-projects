import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function PlayersTableContainer(props) {
  return (
  <View style={styles.container}>
    <Text>Deck</Text>
  {/* <View style={styles.left}>
    <Text> One </Text>
  </View>
  <View style={styles.right}>
  <Text> Two </Text>
  </View> */}
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E6E6E6",
    flex: 1,
   },

  left: {
    flex: 0.5,
    backgroundColor: "rgba(236, 236, 236,1)"
  },
  right: {
    flex: 0.5,
    backgroundColor: "rgba(254, 254, 254,1)"
  }
});

export default PlayersTableContainer;
