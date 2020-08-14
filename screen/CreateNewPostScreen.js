import React from "react";
import { View, Text, StyleSheet } from "react-native";
import defaultStyles from "../constants/default-styles";

const CreateNewPostScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>CreateNewPostScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: defaultStyles.screen,
});

export default CreateNewPostScreen;
