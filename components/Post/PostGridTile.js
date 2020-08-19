import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import { AllerRg } from "../custom-text";
import defaultStyles from "../../constants/default-styles";

const PostGridTile = (props) => {
  return (
    <TouchableOpacity style={styles.postItem} onPress={props.onSelect}>
      <View style={styles.container}>
        <AllerRg>{props.item.title}</AllerRg>
        <AllerRg>{props.item.locationName}</AllerRg>
        <AllerRg>by {props.item.userName}</AllerRg>
        <AllerRg> {props.item.created_at}</AllerRg>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  postItem: {
    flex: 1,
    margin: 5,
    height: Dimensions.get("window").height * 0.2,
  },
  container: {
    ...defaultStyles.container,
    height: Dimensions.get("window").height * 0.1,
    marginVertical: 5,
    flex: 1,
    justifyContent: "space-around",
  },
});

export default PostGridTile;
