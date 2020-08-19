import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import defaultStyles from "../../constants/default-styles";
import { AllerRg, AllerBd } from "../custom-text";

const MainPost = ({ post }) => {
  return (
    <View style={styles.container}>
      {post.images.map((img, i) => (
        <Image key={i} style={styles.image} source={{ uri: img.url }} />
      ))}

      <AllerBd style={styles.title}>{post.locationName}</AllerBd>
      <AllerRg>{post.body}</AllerRg>
      <View style={{ ...styles.rowList, justifyContent: "flex-start" }}>
        {post.categories.map((cat, i) => (
          <AllerRg style={styles.text} key={i}>
            #{cat.category}
          </AllerRg>
        ))}
      </View>
      <View style={{ ...styles.rowList, justifyContent: "flex-end" }}>
        <AllerRg style={styles.text}>by {post.userName}</AllerRg>
      </View>
      <AllerRg> {post.created_at}</AllerRg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: defaultStyles.container,
  title: {
    fontSize: 18,
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
