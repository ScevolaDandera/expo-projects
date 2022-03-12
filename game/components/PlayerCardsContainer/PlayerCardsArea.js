import React, { Component, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Card from "./Card";

function PlayerCardsArea(props) {

  const newArray = props.cardArray;

  const HandleTouchCard = (id) => {
    console.log("Pressed a card from Player Cards Area", id);
    props.touchCard(id);
  }



  return (
    <View style={[styles.container, props.style]}>
            {
        newArray.map(( {id, name, image }) => (
          <TouchableOpacity key={id} style={styles.button} onPress={ () => HandleTouchCard (id)}>
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
