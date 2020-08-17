import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import defaultStyles from "../constants/default-styles";
import { POSTDETAILS } from "../data/dummy-data";
import MainPost from "../components/Post/MainPost";
import PostComment from "../components/Post/PostComment";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/headerButton";

const PostScreen = ({ navigation }) => {
  const { id } = navigation.state.params;
  //   {
  //     title,
  //     body,
  //     images,
  //     categories,
  //     comments,
  //     userName,
  //     locationName,
  //   }
  const selectedPost = POSTDETAILS.find((post) => post.id === id);

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
  const title = navData.navigation.getParam("title");
  return {
    headerTitle: title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="favorite" iconName="bookmark"></Item>
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: defaultStyles.screen,
});

export default PostScreen;
