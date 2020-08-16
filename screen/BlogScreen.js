import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import defaultStyles from "../constants/default-styles";
import { POSTS } from "../data/dummy-data";
import PostGridTile from "../components/PostGridTile";

const BlogScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <PostGridTile
        item={itemData.item}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "Post",
            params: {
              ...itemData.item,
            },
          });
        }}
      />
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
});

export default BlogScreen;
