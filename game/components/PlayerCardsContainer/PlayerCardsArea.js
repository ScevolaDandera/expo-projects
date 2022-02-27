import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Card from "./Card";

function PlayerCardsArea(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.button}>
        <Card></Card>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Card></Card>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Card></Card>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Card></Card>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Card></Card>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Card></Card>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Card></Card>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(66,78,52,1)",
    flexDirection: "row",
    justifyContent: "center"
  },
  button: {
    flexDirection: "row",
    alignSelf: "center",
    margin: 2
  }
});

export default PlayerCardsArea;
