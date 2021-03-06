import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

import defaultStyles from "../constants/default-styles";
import Colors from "../constants/Colors";
import MainMapScreen from "../screen/MainMap/MainMapScreen";
import BlogScreen from "../screen/Blog/BlogScreen";
import CreateNewScreen from "../screen/CreateNew/CreateNewScreen";
import ChatroomListScreen from "../screen/Chatroom/ChatroomListScreen";
import ChatroomScreen from "../screen/Chatroom/ChatroomScreen";
import ProfileScreen from "../screen/ProfileScreen";
import PostScreen from "../screen/Blog/PostScreen";
import LoginScreen from "../screen/LoginScreen";
import ProfileSettingScreen from "../screen/ProfileSettingScreen";
import CameraScreen from "../screen/CreateNew/CameraScreen";

const MapNavigator = createStackNavigator(
  {
    MainMap: MainMapScreen,
    Blog: BlogScreen,
    CreateNew: CreateNewScreen,
    ChatroomList: ChatroomListScreen,
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
  {
    ...defaultStyles.header,
    initialRouteName: "Login",
    navigationOptions: {
      drawerLabel: " ",
      drawerIcon: (tabInfo) => {
        return (
          <FontAwesome name="user-circle" size={23} color={tabInfo.tintColor} />
        );
      },
    },
  }
);

const BlogNavigator = createStackNavigator(
  {
    Blog: BlogScreen,
    Post: PostScreen,
  },
  { ...defaultStyles.header, initialRouteName: "Blog" }
);

const CreateNewNavigator = createStackNavigator(
  {
    CreateNew: CreateNewScreen,
    Camera: CameraScreen,
  },
  { ...defaultStyles.header, initialRouteName: "CreateNew" }
);

const ChatroomListNavigator = createStackNavigator(
  {
    ChatroomScreen: ChatroomScreen,
    "Chatroom List": ChatroomListScreen,
  },
  { initialRouteName: "Chatroom List", ...defaultStyles.header }
);

const ChatroomNavigator = createStackNavigator(
  {
    Chatroom: ChatroomScreen,
  },
  { initialRouteName: "Chatroom", ...defaultStyles.header }
);

const ProfileSettingNavigator = createStackNavigator(
  {
    Setting: ProfileSettingScreen,
  },
  { ...defaultStyles.header, navigationOptions: {} }
);

const ProfileNavigator = createDrawerNavigator(
  {
    Login: { screen: LoginNavigator },
    Setting: ProfileSettingNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.accent,
      inactiveTintColor: "#ccc",
    },
  }
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
    CreateNew: {
      screen: CreateNewNavigator,
      navigationOptions: {
        tabBarLabel: "Create New",
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
    ChatroomList: {
      screen: ChatroomListNavigator,
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
      screen: ProfileNavigator,
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
