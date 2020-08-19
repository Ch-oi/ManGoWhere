import React from "react";
import { View, StyleSheet, Text } from "react-native";
import defaultStyles from "../../constants/default-styles";

const PostComment = ({ comment }) => {
  return (
    <View style={styles.container}>
      <Text>{comment.user_name}</Text>
      <Text>{comment.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...defaultStyles.container,
    alignItems: "flex-start",
    padding: 10,
  },
});

export default PostComment;
