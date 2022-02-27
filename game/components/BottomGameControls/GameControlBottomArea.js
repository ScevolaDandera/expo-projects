import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import CupertinoButtonDanger from "./CupertinoButtonDanger";
import CupertinoButtonSuccess from "./CupertinoButtonSuccess";

function GameControlBottomArea(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.button}>
        <CupertinoButtonDanger
          style={styles.cupertinoButtonDanger}
        ></CupertinoButtonDanger>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2}>
        <CupertinoButtonSuccess
          style={styles.cupertinoButtonSuccess}
        ></CupertinoButtonSuccess>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E6E6E6",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: 100,
    height: 44,
    margin: 20
  },
  cupertinoButtonDanger: {
    height: 44,
    width: 100
  },
  button2: {
    width: 100,
    height: 44,
    margin: 20
  },
  cupertinoButtonSuccess: {
    height: 44,
    width: 100
  }
});

export default GameControlBottomArea;
