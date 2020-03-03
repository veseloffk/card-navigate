import React from "react";
import { StyleSheet, View, Dimensions, Animated } from "react-native";

const SCREEN_HEIGHT = Dimensions.get("window").height;

import Card from "../Card";

import { getItemAnimatedProperties } from "./utils";

export default function CardList({ cards }) {
  const yOffset = new Animated.Value(0);

  const onScroll = Animated.event([
    { nativeEvent: { contentOffset: { y: yOffset } } }
  ]);

  return (
    <Animated.ScrollView
      style={styles.wrapper}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={8}
      pagingEnabled
      onScroll={onScroll}
    >
      {cards.map(
        ({ id, shortDescription, fullDescription, ...cardInfo }, index) => {
          const {
            paddingTop,
            paddingBottom,
            fullTextOpacity,
            shortTextOpcaity,
            upperTextOpcaity
          } = getItemAnimatedProperties(index, yOffset, SCREEN_HEIGHT);

          return (
            <Animated.View
              key={id}
              style={[styles.item, { paddingTop, paddingBottom }]}
            >
              <View style={styles.textWrapper}>
                <Animated.Text
                  style={[
                    styles.text,
                    styles.upperCardText,
                    { opacity: upperTextOpcaity }
                  ]}
                >
                  {shortDescription}
                </Animated.Text>
              </View>
              <Card {...cardInfo} />
              <View style={styles.textWrapper}>
                <Animated.Text
                  style={[
                    styles.text,
                    styles.underCardText,
                    { opacity: fullTextOpacity }
                  ]}
                >
                  {fullDescription}
                </Animated.Text>
                <Animated.Text
                  style={[
                    styles.text,
                    styles.underCardText,
                    { opacity: shortTextOpcaity }
                  ]}
                >
                  {shortDescription}
                </Animated.Text>
              </View>
            </Animated.View>
          );
        }
      )}
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    paddingRight: 30,
    paddingLeft: 30
  },
  textWrapper: {
    width: "100%",
    height: 16
  },
  upperCardText: {
    position: "absolute",
    width: "100%",
    bottom: 20
  },
  underCardText: {
    position: "absolute",
    width: "100%",
    top: 20
  },
  item: {
    alignItems: "center",
    justifyContent: "center",
    height: SCREEN_HEIGHT
  },
  text: {
    color: "grey",
    textAlign: "center",
    fontSize: 16
  }
});
