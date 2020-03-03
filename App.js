import React from "react";
import { StyleSheet, View } from "react-native";

import CardList from "./components/CardsList";

import cards from "./cardsData";

export default function App() {
  return (
    <View style={styles.container}>
      <CardList cards={cards} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
