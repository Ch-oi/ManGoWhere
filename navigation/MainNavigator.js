import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import MainMapScreen from "../screen/MainMapScreen";
import BlogScreen from "../screen/BlogScreen";
import CreateNewPostScreen from "../screen/CreateNewPostScreen";
import CreateNewLocationScreen from "../screen/CreateNewLocationScreen";
import ChatroomScreen from "../screen/ChatroomScreen";
import ProfileScreen from "../screen/ProfileScreen";
import PostScreen from "../screen/PostScreen";
import LoginScreen from "../screen/LoginScreen";

const MainNavigator = createStackNavigator(
  {
    MainMap: MainMapScreen,
    Blog: BlogScreen,
    CreateNewPost: CreateNewPostScreen,
    CreateNewLocation: CreateNewLocationScreen,
    Chatroom: ChatroomScreen,
    Login: LoginScreen,
    Profile: ProfileScreen,
    Post: PostScreen,
  },
  {
    initialRouteName: "MainMap",
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#fff",
      },
      headerTintColor: "#E08553",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    },
  }
);

export default createAppContainer(MainNavigator);
