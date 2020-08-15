import React from "react";
import { View, Text, StyleSheet } from "react-native";
import defaultStyles from "../constants/default-styles";

const PostScreen = (props) => {
  const pid = props.navigation.getParam("id");
  const title = props.navigation.getParam("title");
  const body = props.navigation.getParam("body");

  return (
    <View style={styles.screen}>
      <Text>{title}</Text>
      <Text>{body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: defaultStyles.screen,
});

export default PostScreen;
