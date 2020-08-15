import React from "react";
import { View, Text, StyleSheet } from "react-native";
import defaultStyles from "../constants/default-styles";

const CreateNewLocationScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>CreateNewLocationScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: defaultStyles.screen,
});

export default CreateNewLocationScreen;
