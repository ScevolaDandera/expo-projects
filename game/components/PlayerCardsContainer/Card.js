import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";




function Card(props) {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const panGenstureEvent = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      ctx.translateX = translateX.value;
      ctx.translateY = translateY.value;
    },
    onActive: (event, ctx) => {
      translateX.value = event.translationX + ctx.translateX;
      translateY.value = event.translationY + ctx.translateY;
    },
    onEnd: (event, ctx) => {
      if(translateY.value < -100) {
        console.log("greater than 100");
      }
      else {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      }
    
    }
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value }
      ]
    }
  });
  return (



    <PanGestureHandler onGestureEvent={panGenstureEvent}>
      <Animated.View style={[styles.container, props.style, rStyle]}>
        <Image
          source={props.imagesrc}
          style={styles.image}
        ></Image>
      </Animated.View>
    </PanGestureHandler>



  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#C2B839",
    justifyContent: "center",
    width: 46,
    height: 70,
    marginRight: 2,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,

  },
  image: {
    flex: 1,
    resizeMode: "cover",
    height: "100%",
    width: "100%",
    borderRadius: 5

  }
});

export default Card;
