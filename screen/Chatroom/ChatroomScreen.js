import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ChatroomMessage from '../../components/Chatroom/ChatroomMessage';
import Input from '../../components/Chatroom/Input';

const ChatroomScreen = (props) => {
  return (
    <>
      <ChatroomMessage />
      <Input />
    </>
  );
};

const styles = StyleSheet.create({});

export default ChatroomScreen;
