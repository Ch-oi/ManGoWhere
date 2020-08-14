import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import MainMapScreen from "../screen/MainMapScreen";
import BlogScreen from "../screen/BlogScreen";
import CreateNewPostScreen from "../screen/CreateNewPostScreen";
import ChatroomScreen from "../screen/ChatroomScreen";
import ProfileScreen from "../screen/ProfileScreen";

const MainNavigator = createStackNavigator({
  MainMap: MainMapScreen,
  Blog: BlogScreen,
  CreateNewPost: CreateNewPostScreen,
  Chatroom: ChatroomScreen,
  Profile: ProfileScreen,
});

export default createAppContainer(MainNavigator);
