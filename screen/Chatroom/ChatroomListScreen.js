import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import defaultStyles from '../../constants/default-styles';
import ChatroomItem from '../../components/Chatroom/ChatroomItem';

const ChatroomScreen = (props) => {
  return (
    <View style={styles.screen}>
      <ChatroomItem navigation={props.navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default ChatroomScreen;
