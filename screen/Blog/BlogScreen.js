import React from "react";
import { useSelector } from "react-redux";
import { View, StyleSheet, FlatList, Text } from "react-native";
import defaultStyles from "../../constants/default-styles";
import PostGridTile from "../../components/Post/PostGridTile";

const BlogScreen = (props) => {
  const allPosts = useSelector((state) => state.posts.posts);
  const favPosts = useSelector((state) => state.posts.favoritePosts);

  const renderGridItem = (itemData) => {
    const isFav = favPosts.some((post) => post.id === itemData.item.id);
    return (
      <PostGridTile
        item={itemData.item}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "Post",
            params: {
              ...itemData.item,
              isFav: isFav,
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
          data={allPosts}
          renderItem={renderGridItem}
        />
      </View>
    </View>
  );
};

// BlogScreen.navigationOptions = {
//   headerTitle: "nice picture",
//   headerStyle: {
//     backgroundColor: Colors.primary,
//   },
// };

const styles = StyleSheet.create({
  screen: defaultStyles.screen,
  postsContainer: { width: "95%" },
});

export default BlogScreen;
