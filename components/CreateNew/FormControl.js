import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { AllerRg } from "../custom-text";
import SelectPicker from "react-native-form-select-picker";
import MultiSelect from "react-native-multiple-select";

const FormControl = (props) => {
  return (
    <View style={styles.formControl}>
      <AllerRg style={styles.label}>{props.children}</AllerRg>
      {props.type === "picker" ? (
        <SelectPicker
          onValueChange={(value) => {
            props.onChange(value);
          }}
          selected={props.value}
        >
          {props.pickerItems.map((location, i) => {
            return <SelectPicker.Item key={location.id} {...location} />;
          })}
        </SelectPicker>
      ) : props.type === "multi" ? (
        <MultiSelect
          items={props.pickerItems}
          uniqueKey="id"
          selectedItems={props.value}
          onSelectedItemsChange={(value) => props.onChange(value)}
          tagRemoveIconColor="#ccc"
          tagBorderColor="#ccc"
        ></MultiSelect>
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
