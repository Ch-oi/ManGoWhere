import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import defaultStyles from "../constants/default-styles";

const CreateNewPostScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>CreateNewPostScreen</Text>
      <Button
        title="individual post"
        onPress={() => {
          props.navigation.push("CreateNewPost");
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: defaultStyles.screen,
});

export default CreateNewPostScreen;