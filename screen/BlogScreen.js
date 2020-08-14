import React from "react";
import { View, Text, StyleSheet } from "react-native";
import defaultStyles from "../constants/default-styles";

const BlogScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>BlogScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: defaultStyles.screen,
});

export default BlogScreen;
