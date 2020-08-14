import React from "react";
import { View, Text, StyleSheet } from "react-native";
import defaultStyles from "../constants/default-styles";

const MainMapScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>MainMapScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: defaultStyles.screen,
});

export default MainMapScreen;
