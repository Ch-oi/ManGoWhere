import React from "react";
import { View, Text, StyleSheet } from "react-native";
import defaultStyles from "../constants/default-styles";

const PostScreen = ({ navigation }) => {
  const { title, body } = navigation.state.params;
  return (
    <View style={styles.screen}>
      <Text>{title}</Text>
      <Text>{body}</Text>
    </View>
  );
};

PostScreen["navigationOptions"] = (navData) => {
  const title = navData.navigation.getParam("title");
  return {
    headerTitle: title,
  };
};

const styles = StyleSheet.create({
  screen: defaultStyles.screen,
});

export default PostScreen;
