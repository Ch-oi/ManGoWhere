import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import defaultStyles from '../constants/default-styles';

const LoginScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>LoginScreen</Text>
      <Button
        title='profile'
        onPress={() => {
          props.navigation.replace('Profile');
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: defaultStyles.screen,
});

export default LoginScreen;
