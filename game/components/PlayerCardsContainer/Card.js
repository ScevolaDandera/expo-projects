import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

function Card(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../../assets/deck/backR.png")}
        style={styles.image}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#C2B839",
    justifyContent: "center",
    width: 46,
    height: 70,
    marginRight: 2,

  },
  image: {
    flex: 1,
    resizeMode: "cover",
    height: "100%",
    width: "100%"
 
  }
});

export default Card;
