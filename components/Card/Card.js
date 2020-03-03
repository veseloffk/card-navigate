import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Card({
  cardNumber,
  expireDate,
  holderName,
  paymentSystemType
}) {
  return (
    <View style={styles.wrapper}>
      <Text style={[styles.bankName]}>Рокетбанк</Text>
      <Text style={[styles.cardNumber, styles.text]}>{cardNumber}</Text>
      <Text style={[styles.expireDate, styles.text]}>{expireDate}</Text>
      <Text style={[styles.holderName, styles.text]}>{holderName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "orange",
    width: "100%",
    aspectRatio: 530 / 310,
    borderRadius: 20,
    position: "relative"
  },
  text: {
    fontSize: 15,
    position: "absolute",
    left: "10%"
  },
  bankName: {
    fontSize: 24,
    position: "absolute",
    left: "10%",
    top: "10%"
  },
  cardNumber: {
    bottom: "30%"
  },
  expireDate: {
    bottom: "20%"
  },
  holderName: {
    bottom: "10%"
  }
});
