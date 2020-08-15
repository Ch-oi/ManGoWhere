import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import defaultStyles from "../constants/default-styles";
import { POSTS } from "../data/dummy-data";
import Colors from "../constants/Colors";

const BlogScreen = (props) => {
  const renderGridItem = (itemData) => {
    console.log(itemData);
    return (
      <TouchableOpacity
        style={styles.postItem}
        onPress={() => {
          props.navigation.navigate({
            routeName: "Post",
            params: {
              ...itemData.item,
            },
          });
        }}
      >
        <View>
          <Text>{itemData.item.title}</Text>
          <Text>{itemData.item.body}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.screen}>
      <View style={styles.postsContainer}>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={POSTS}
          renderItem={renderGridItem}
        />
      </View>
    </View>
  );
};

// BlogScreen.navigationOptions = {
//   headerTitle: "dick",
//   headerStyle: {
//     backgroundColor: Colors.primary,
//   },
// };

const styles = StyleSheet.create({
  screen: defaultStyles.screen,
  postsContainer: { width: "95%" },
  postItem: {
    flex: 1,
    margin: 10,
    height: Dimensions.get("window").height * 0.2,
  },
});

export default BlogScreen;
