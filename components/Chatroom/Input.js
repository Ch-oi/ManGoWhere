import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

const Input = (props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      {/* <View style={styles.textInputContainer}>
      <TextInput placeholder='Type a message' style={styles.textInput} />
      </View> */}
      <TextInput />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputContainer: {
    width: '80%',
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
  },
  textInput: {
    width: '80%',
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
  },
});

export default Input;
