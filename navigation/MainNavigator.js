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

const MainNavigator = createStackNavigator({
  MainMap: MainMapScreen,
  Blog: BlogScreen,
  CreateNewPost: CreateNewPostScreen,
  CreateNewLocation: CreateNewLocationScreen,
  Chatroom: ChatroomScreen,
  Login: LoginScreen,
  Profile: ProfileScreen,
  Post: PostScreen,
});

export default createAppContainer(MainNavigator);
