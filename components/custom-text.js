import React from "react";
import { Text, StyleSheet } from "react-native";

export const AllerRg = (props) => {
  return (
    <Text style={{ ...styles.regular, ...props.style }}>{props.children}</Text>
  );
};

export const AllerBd = (props) => {
  return (
    <Text style={{ ...styles.bold, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  regular: {
    fontFamily: "aller-rg",
  },
  bold: {
    fontFamily: "aller-bd",
  },
});
