import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import defaultStyles from "../constants/default-styles";

const BlogScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>BlogScreen</Text>
      <Button
        title="individual post"
        onPress={() => {
          props.navigation.navigate("Post");
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: defaultStyles.screen,
});

export default BlogScreen;
