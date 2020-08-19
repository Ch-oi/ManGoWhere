import MainNavigator from "./navigation/MainNavigator";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
// import logger from "redux-logger";
import postsReducer from "./store/reducers/post";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { enableScreens, useScreens } from "react-native-screens";
import * as Font from "expo-font";
import { AppLoading } from "expo";

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    "aller-rg": require("./assets/fonts/Aller_Rg.ttf"),
    "aller-bd": require("./assets/fonts/Aller_Bd.ttf"),
  });
};

const rootReducer = combineReducers({
  posts: postsReducer,
});

const store = createStore(rootReducer);

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
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({});
