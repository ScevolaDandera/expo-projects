import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

function PlayersTableContainer(props) {
  return <View style={[styles.container, props.style]}>
    <Text>Deck</Text>
    </View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(43,54,49,1)",
    alignItems: 'center',
    justifyContent: "center"
  }
});

export default PlayersTableContainer;
