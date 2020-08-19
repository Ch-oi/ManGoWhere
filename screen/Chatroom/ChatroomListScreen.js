import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import defaultStyles from '../../constants/default-styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ChatroomScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TouchableOpacity onPress={() => console.log('Pressed')}>
        <Text style={styles.text}>Hello</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 100,
    fontFamily: 'aller-bd',
  },
});

export default ChatroomScreen;
