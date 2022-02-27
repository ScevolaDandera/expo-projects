import React from 'react';
import { View, StyleSheet, StatusBar} from 'react-native';
import GameControlBottomArea from "../components/BottomGameControls/GameControlBottomArea";
import PlayerCardsArea from "../components/PlayerCardsContainer/PlayerCardsArea";
import PlayersTableContainer from "../components/PlayersTableContainer/PlayersTableContainer";

export const GameScreen = () => {

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <PlayersTableContainer style={styles.playerTableArea} />
      <PlayerCardsArea style={styles.playerCardsArea} />
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
  },
  gameControlBottomArea: {
    height: 100,
    width: "100%",
    backgroundColor: "rgba(11,41,27,1)"
  }

});
