import React, {useState, useEffect } from 'react';
import { View, StyleSheet, StatusBar, Dimensions } from 'react-native';
import GameControlBottomArea from "../components/BottomGameControls/GameControlBottomArea";
import PlayerCardsArea from "../components/PlayerCardsContainer/PlayerCardsArea";
import PlayersTableContainer from "../components/PlayersTableContainer/PlayersTableContainer";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export const GameScreen = () => {
  let cards = [
    {
      id: 1,
      name: "Card 1",
      image: require("../assets/deck/1C.png")
    },
    {
      id: 2,
      name: "Card 2",
      image: require("../assets/deck/2C.png")
    },
    {
      id: 3,
      name: "Card 3",
      image: require("../assets/deck/3C.png")
    }];
  let stack = [
      {
        id: 4,
        name: "Card 4",
        image: require("../assets/deck/4C.png")
      },
      {
        id: 5,
        name: "Card 5",
        image: require("../assets/deck/5C.png")
      },
      {
        id: 6,
        name: "Card 6",
        image: require("../assets/deck/6C.png")
      }];
  let wasteStack = [
        {
          id: 7,
          name: "Card 7",
          image: require("../assets/deck/7C.png")
        },
        {
          id: 8,
          name: "Card 8",
          image: require("../assets/deck/8C.png")
        },
        {
          id: 9,
          name: "Card 9",
          image: require("../assets/deck/9C.png")
        }];
  let transitStack = [
          {
            id: 10,
            name: "Card 10",
            image: require("../assets/deck/10C.png")
          },
          {
            id: 11,
            name: "Card 11",
            image: require("../assets/deck/11C.png")
          },
          {
            id: 12,
            name: "Card 12",
            image: require("../assets/deck/12C.png")
          }];
  
    const [cardsArray, setCardsArray] = useState(cards);
    const [stackArray, setStackArray] = useState(stack);
    const [wasteStackArray, setWasteStackArray] = useState(wasteStack);
    const [transitStackArray, settransitStackArray] = useState(transitStack);

    useEffect(() => {
      console.log("state updated: useEffect");
      console.log("Cards Array", cardsArray);
      console.log("Transit Array", transitStackArray);
    }, [cardsArray, transitStackArray]);

    

   const onPressCard = (id) => {
     transferToTransitArray(id);
     setCardsArray(removeCardFromStack(id));
   }

   const removeCardFromStack = (id) => {
    const newCardsArray =  cardsArray.filter(card => card.id !== id)
    return newCardsArray;
   }

   const transferToTransitArray = (id) => {
    const targetCard =  cardsArray.filter(card => card.id == id)
    const newTransitcardsArray = transitStackArray.slice();
    newTransitcardsArray.push(targetCard[0]); 
    settransitStackArray(newTransitcardsArray);
   }

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <PlayersTableContainer style={styles.playerTableArea} />
      <PlayerCardsArea style={styles.playerCardsArea} cardArray={cardsArray} touchCard={onPressCard} /> 
      <GameControlBottomArea style={styles.gameControlBottomArea}/>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: "yellow",
    height: '100%'
  },
  playerTableArea: {
    flex: 1,
  },
  playerCardsArea: {
    height: 120,
    backgroundColor: "rgba(66,78,52,1)"
  },
  gameControlBottomArea: {
    height: 100,
    width: "100%",
    backgroundColor: "rgba(11,41,27,1)"
  }

});
