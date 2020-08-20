import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../../constants/Colors';

const ChatroomList = (props) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('ChatroomScreen')}
      >
        <View style={styles.container}>
          <Image
            source={require('../../assets/images/dog.jpg')}
            style={styles.icon}
          />
          <View style={styles.chatroomItem}>
            <Text style={styles.text}>Phyllis Stanley</Text>
            <Text style={styles.lastMsg}>Are you coming to my party?</Text>
          </View>
          <View>
            <Text style={styles.time}>12:00</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.container}>
          <Image
            source={require('../../assets/images/human.jpg')}
            style={styles.icon}
          />
          <View style={styles.chatroomItem}>
            <Text style={styles.text}>Marvin Ivey</Text>
            <Text style={styles.lastMsg}>That's great, isn't it?</Text>
          </View>
          <View>
            <Text style={styles.time}>12:00</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.container}>
          <Image
            source={require('../../assets/images/room.jpg')}
            style={styles.icon}
          />
          <View style={styles.chatroomItem}>
            <Text style={styles.text}>Jonathan Johnson</Text>
            <Text style={styles.lastMsg}>Good luck!</Text>
          </View>
          <View>
            <Text style={styles.time}>12:00</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    fontFamily: 'aller-bd',
  },
  container: {
    width: '95%',
    height: 75,
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 10,
    justifyContent: 'space-around',
    backgroundColor: '#ADD8E6',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
  },
  lastMsg: {
    alignItems: 'flex-end',
    fontFamily: 'aller-rg',
  },
  chatroomItem: { width: '60%', justifyContent: 'space-around' },
  icon: { height: 60, width: 60, marginVertical: 7.5 },
  time: { marginVertical: 30 },
});

export default ChatroomList;
