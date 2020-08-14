import React from "react";
import { View, Text, StyleSheet } from "react-native";
import defaultStyles from "../constants/default-styles";

const ChatroomScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>ChatroomScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: defaultStyles.screen,
});

export default ChatroomScreen;
