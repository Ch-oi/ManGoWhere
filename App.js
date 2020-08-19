import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { enableScreens } from 'react-native-screens';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import MainNavigator from './navigation/MainNavigator';

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'aller-rg': require('./assets/fonts/Aller_Rg.ttf'),
    'aller-bd': require('./assets/fonts/Aller_Bd.ttf'),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }
  return <MainNavigator />;
}

const styles = StyleSheet.create({});
