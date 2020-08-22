import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { AllerRg } from "../custom-text";
import SelectPicker from "react-native-form-select-picker";

const FormControl = (props) => {
  return (
    <View style={styles.formControl}>
      <AllerRg style={styles.label}>{props.children}</AllerRg>
      {props.type === "picker" ? (
        <SelectPicker
          style={styles.picker}
          selected={props.value}
          onValueChange={(value) => {
            props.onChange(value);
          }}
        >
          {props.pickerItems.map((item) => {
            return (
              <SelectPicker.Item
                key={item.id}
                label={item.category ? item.category : item.en}
                value={item.category ? item.category : item.en}
              />
            );
          })}
        </SelectPicker>
      ) : (
        <TextInput
          value={props.value}
          onChangeText={(text) => {
            props.onChange(text);
          }}
          {...(props.type === "body" && { multiline: true, numberOfLines: 10 })}
          style={styles.input}
        ></TextInput>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  formControl: { width: "100%" },
  label: { marginVertical: 8 },
  picker: { borderColor: "#ccc", borderWidth: 1 },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});

export default FormControl;
