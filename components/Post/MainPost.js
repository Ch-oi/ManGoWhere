import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import defaultStyles from "../../constants/default-styles";

const MainPost = ({ post }) => {
  return (
    <View style={styles.container}>
      {post.images.map((img, i) => (
        <Image key={i} style={styles.image} source={{ uri: img.url }} />
      ))}

      <Text style={styles.title}>{post.locationName}</Text>
      <Text>{post.body}</Text>
      <View style={{ ...styles.rowList, justifyContent: "flex-start" }}>
        {post.categories.map((cat, i) => (
          <Text style={styles.text} key={i}>
            #{cat.category}
          </Text>
        ))}
      </View>
      <View style={{ ...styles.rowList, justifyContent: "flex-end" }}>
        <Text style={styles.text}>by {post.userName}</Text>
      </View>
      <Text> {post.created_at}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: defaultStyles.container,
  title: {
    fontSize: 15,
  },
  rowList: {
    flexDirection: "row",
    width: "100%",
  },
  text: {
    marginHorizontal: 5,
  },
  image: {
    width: "90%",
    height: 200,
  },
});

export default MainPost;
