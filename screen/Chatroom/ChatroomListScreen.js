import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import defaultStyles from '../../constants/default-styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AllerBd } from '../../components/custom-text';

import ChatroomList from '../../components/Chatroom/ChatroomList';

const ChatroomListScreen = (props) => {
  return (
    <View style={styles.screen}>
      <ChatroomList navigation={props.navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default ChatroomListScreen;
