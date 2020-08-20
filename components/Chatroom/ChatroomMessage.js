import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatroomMessage = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftMsg}>
        <Text style={styles.leftMsg}>This is a message from left</Text>
      </View>
      <View style={styles.rightMsg}>
        <Text style={styles.rightMsg}>This is a message from right</Text>
      </View>
      <View style={styles.leftMsg}>
        <Text style={styles.leftMsg}>This is a message from left</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center' },
  leftMsg: {
    width: '95%',
    minHeight: 50,
    alignItems: 'center',
    backgroundColor: '#ddd',
  },
  rightMsg: {
    width: '95%',
    minHeight: 50,
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    alignItems: 'flex-end',
  },
  leftContainer: { width: '100%' },
  rightContainer: { backgroundColor: '#f1f1f1', alignItems: 'flex-end' },
  //   leftMsg: { justifyContent: 'flex-start' },
});

export default ChatroomMessage;
