import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import defaultStyles from '../constants/default-styles';

const MainMapScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>MainMapScreen</Text>
      <Button
        title='newPost'
        onPress={() => {
          props.navigation.navigate({ routeName: 'CreateNewPost' });
        }}
      ></Button>
      <Button
        title='newLocation'
        onPress={() => {
          props.navigation.navigate({ routeName: 'CreateNewLocation' });
        }}
      ></Button>
      <Button
        title='blog'
        onPress={() => {
          props.navigation.navigate({ routeName: 'Blog' });
        }}
      ></Button>
      <Button
        title='chatroom'
        onPress={() => {
          props.navigation.navigate({ routeName: 'Chatroom' });
        }}
      ></Button>
      <Button
        title='login'
        onPress={() => {
          props.navigation.navigate({ routeName: 'Login' });
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: defaultStyles.screen,
});

export default MainMapScreen;
