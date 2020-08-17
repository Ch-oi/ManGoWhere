import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

import defaultStyles from "../constants/default-styles";
import Colors from "../constants/Colors";
import MainMapScreen from "../screen/MainMapScreen";
import BlogScreen from "../screen/BlogScreen";
import CreateNewPostScreen from "../screen/CreateNewPostScreen";
import CreateNewLocationScreen from "../screen/CreateNewLocationScreen";
import ChatroomScreen from "../screen/ChatroomScreen";
import ProfileScreen from "../screen/ProfileScreen";
import PostScreen from "../screen/PostScreen";
import LoginScreen from "../screen/LoginScreen";

const MapNavigator = createStackNavigator(
  {
    MainMap: MainMapScreen,
    Blog: BlogScreen,
    CreateNewPost: CreateNewPostScreen,
    CreateNewLocation: CreateNewLocationScreen,
    Chatroom: ChatroomScreen,
    Post: PostScreen,
  },
  { initialRouteName: "MainMap", ...defaultStyles.header }
);

const LoginNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Profile: ProfileScreen,
    Blog: BlogScreen,
    Post: PostScreen,
  },
  { ...defaultStyles.header, initialRouteName: "Login" }
);

const BlogNavigator = createStackNavigator(
  {
    Blog: BlogScreen,
    Post: PostScreen,
  },
  { ...defaultStyles.header, initialRouteName: "Blog" }
);
const ButtomNavigator = createBottomTabNavigator(
  {
    Map: {
      screen: MapNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <FontAwesome name="map" size={23} color={tabInfo.tintColor} />;
        },
      },
    },
    Blog: {
      screen: BlogNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <FontAwesome name="list-ul" size={25} color={tabInfo.tintColor} />
          );
        },
      },
    },
    CreateNewPost: {
      screen: CreateNewPostScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <FontAwesome
              name="plus-square"
              size={27}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    Chatroom: {
      screen: ChatroomScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="md-chatbubbles"
              size={29}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    Login: {
      screen: LoginNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <FontAwesome name="user" size={27} color={tabInfo.tintColor} />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.accent,
    },
  }
);

export default createAppContainer(ButtomNavigator);
