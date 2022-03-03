import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Card from "./Card";

function PlayerCardsArea(props) {
  return (
    <View style={[styles.container, props.style]}>
            {
        props.cardArray.map(( {id, name, image }) => (
          <TouchableOpacity key={id} style={styles.button} onPress={props.touchCard}>
            <Card imagesrc={image} />
        </TouchableOpacity>
        ))
      }
  
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
