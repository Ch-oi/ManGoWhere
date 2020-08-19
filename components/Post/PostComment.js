import React from "react";
import { View, StyleSheet, Text } from "react-native";
import defaultStyles from "../../constants/default-styles";
import { AllerRg } from "../custom-text";

const PostComment = ({ comment }) => {
  return (
    <View style={styles.container}>
      <AllerRg>{comment.user_name}</AllerRg>
      <AllerRg>{comment.body}</AllerRg>
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
