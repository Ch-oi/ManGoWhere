import React, { useEffect, useCallback } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import defaultStyles from "../constants/default-styles";
import MainPost from "../components/Post/MainPost";
import PostComment from "../components/Post/PostComment";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { CustomHeaderButton } from "../components/header-button";
import { createFavPost } from "../store/actions/posts";

const PostScreen = ({ navigation }) => {
  const { id } = navigation.state.params;
  const postsDetails = useSelector((state) => state.posts.postsDetails);
  const selectedPost = postsDetails.find((post) => post.id === id);

  const isFav = useSelector((state) =>
    state.posts.favoritePosts.some((post) => post.id === id)
  );

  const dispatch = useDispatch();

  const addToFav = useCallback(() => {
    dispatch(createFavPost(id));
  }, [dispatch, id]);

  useEffect(() => {
    navigation.setParams({ addToFav: addToFav });
  }, [addToFav]);

  useEffect(() => {
    navigation.setParams({ isFav: isFav });
  }, [isFav]);

  const renderGridItem = (itemData) => {
    return <PostComment comment={itemData.item} />;
  };

  return (
    <View style={{ padding: 10 }}>
      <FlatList
        ListHeaderComponent={
          <View style={styles.screen}>
            <MainPost post={selectedPost} />
          </View>
        }
        keyExtractor={(item) => item.id.toString()}
        data={selectedPost.comments}
        renderItem={renderGridItem}
      />
    </View>
  );
};

PostScreen["navigationOptions"] = (navData) => {
  // console.log(navData.navigation);
  const title = navData.navigation.getParam("title");
  const addToFav = navData.navigation.getParam("addToFav");
  const isFav = navData.navigation.getParam("isFav");

  return {
    headerTitle: title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="favorite"
          iconName={isFav ? "bookmark" : "bookmark-o"}
          onPress={addToFav}
        ></Item>
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: defaultStyles.screen,
});

export default PostScreen;
