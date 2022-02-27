import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

function PlayersTableContainer(props) {
  return <View style={[styles.container, props.style]}></View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(43,54,49,1)"
  }
});

export default PlayersTableContainer;
