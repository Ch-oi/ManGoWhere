import React from "react";
import { View, StyleSheet } from "react-native";
import defaultStyles from "../constants/default-styles";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { CustomHeaderButton2 } from "../components/header-button";

const ProfileSettingScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.postsContainer}></View>
    </View>
  );
};

ProfileSettingScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Setting",
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

export default ProfileSettingScreen;
