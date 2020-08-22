import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';

import { AllerRg, AllerBd } from '../../components/custom-text';
import Input from './Input';
import Colors from '../../constants/Colors';

const ChatroomMessage = (props) => {
  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View style={styles.container}>
            <View style={styles.leftMsg}>
              <Image
                source={require('../../assets/images/dog.jpg')}
                style={styles.leftIcon}
              />
              <AllerRg style={styles.text}>
                Hello Serana, I saw your message on Whatsapp, it's nice to meet
                you, I am Phyllis, Phyllis Stanley. You can just call me
                Stanley. I know you heard from Natalie that we are having a
                party at my house this friday, do you know where my house is? I
                can send you the locaion here.
              </AllerRg>
              <Text>21:08</Text>
            </View>
            <View style={styles.rightMsg}>
              <AllerRg style={styles.myText}>
                Sure, I will come, it's also nice to meet you! And I can see the
                location of your house now!
              </AllerRg>
              <Text>21:48</Text>
            </View>
            <View style={styles.leftMsg}>
              <Image
                source={require('../../assets/images/dog.jpg')}
                style={styles.leftIcon}
              />
              <AllerRg>Are you coming to my party?</AllerRg>
              <Text>22:18</Text>
            </View>
            <View style={styles.textInputContainer}>
              {/* <TextInput
                placeholder='Type a message'
                style={styles.textInput}
              /> */}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
};

ChatroomMessage.navigationOptions = (navigationData) => {
  return {
    headerTitle: 'HELo',
  };
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
  },

  leftMsg: {
    width: '100%',
    minHeight: 75,
    paddingHorizontal: 10,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  rightMsg: {
    width: '100%',
    minHeight: 75,
    paddingHorizontal: 10,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    maxWidth: '60%',
    marginVertical: 5,
  },
  myText: {
    maxWidth: '85%',
    marginVertical: 5,
    marginHorizontal: 5,
  },
  leftIcon: {
    height: 75,
    width: 75,
    borderRadius: 37.5,
    justifyContent: 'flex-end',
  },
  rightIcon: { height: 75, width: 75, borderRadius: 37.5 },
  textInput: {
    width: '90%',
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
  },
  textInputContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
});

export default ChatroomMessage;
