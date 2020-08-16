import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";

const PostGridTile = (props) => {
  return (
    <TouchableOpacity style={styles.postItem} onPress={props.onSelect}>
      <View style={styles.container}>
        <Text>{props.item.title}</Text>
        <Text>{props.item.locationName}</Text>
        <Text>by {props.item.userName}</Text>
        <Text> {props.item.created_at}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  postItem: {
    flex: 1,
    margin: 10,
    height: Dimensions.get("window").height * 0.2,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default PostGridTile;
