import React, {useState, useEffect } from 'react';
import { View, StyleSheet, StatusBar} from 'react-native';
import GameControlBottomArea from "../components/BottomGameControls/GameControlBottomArea";
import PlayerCardsArea from "../components/PlayerCardsContainer/PlayerCardsArea";
import PlayersTableContainer from "../components/PlayersTableContainer/PlayersTableContainer";



export const GameScreen = () => {
  const cards = [
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

    const [cardsArray, setCardsArray] = useState(cards);

   const onPressCard = () => {
     console.log("Pressed a card");
   }

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <PlayersTableContainer style={styles.playerTableArea} />
      <PlayerCardsArea style={styles.playerCardsArea} cardArray={cardsArray} touchCard={onPressCard}> 
      </PlayerCardsArea>
      <GameControlBottomArea style={styles.gameControlBottomArea}/>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "rgba(15,23,17,1)"
  },
  playerTableArea: {
    flexGrow: 1,
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
