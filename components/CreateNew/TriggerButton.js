import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import defaultStyles from "../../constants/default-styles";
import { AllerBd } from "../custom-text";

const TriggerButton = (props) => {
  return (
    <View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            props.handlePress();
          }}
          style={styles.button}
        >
          <AllerBd>{props.children}</AllerBd>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //   button: defaultStyles.button,
  buttonContainer: defaultStyles.buttonContainer,
  button: defaultStyles.button,
  container: defaultStyles.container,
});

export default TriggerButton;
