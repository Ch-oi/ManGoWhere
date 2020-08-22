import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import defaultStyles from '../../constants/default-styles';

const MainMapScreen = (props) => {
  return (
    <View>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 22.3184954,
          longitude: 114.182377,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: defaultStyles.screen,
  map: { height: '100%' },
});

export default MainMapScreen;
