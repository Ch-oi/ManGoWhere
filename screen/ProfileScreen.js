import React from "react";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet, FlatList } from "react-native";
import defaultStyles from "../constants/default-styles";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { CustomHeaderButton2 } from "../components/header-button";
import PostGridTile from "../components/Post/PostGridTile";

const ProfileScreen = (props) => {
  const favPosts = useSelector((state) => state.posts.favoritePosts);

  console.log(favPosts);

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
        {favPosts.length ? (
          <FlatList
            keyExtractor={(item) => item.id.toString()}
            data={favPosts}
            renderItem={renderGridItem}
          />
        ) : (
          <Text>No fav post</Text>
        )}
      </View>
    </View>
  );
};

ProfileScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Profile",
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton2}>
          <Item
            title="Menu"
            iconName="md-menu"
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      );
    },
  };
};

const styles = StyleSheet.create({
  screen: defaultStyles.screen,
  postsContainer: { width: "95%" },
});

export default ProfileScreen;
