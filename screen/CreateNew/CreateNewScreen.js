import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  Button,
  Picker,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  Image,
} from "react-native";
import { AllerRg } from "../../components/custom-text";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import { useSelector } from "react-redux";
import defaultStyles from "../../constants/default-styles";
import FormControl from "../../components/CreateNew/FormControl";
import TriggerButton from "../../components/CreateNew/TriggerButton";

const CreateNewScreen = (props) => {
  const locations = useSelector((state) =>
    state.map.locations.map((location) => {
      return { ...location, label: location.en, value: location.en };
    })
  );

  const categories = useSelector((state) =>
    state.posts.categories.map((cate) => {
      return { ...cate, name: cate.category, id: cate.id.toString() };
    })
  );

  const [title, setTitle] = useState("");
  const [image, setImage] = useState({ uri: null });
  const [body, setBody] = useState("");
  const [selectedCategory, setSelectedCategory] = useState([]);

  const [selectedLocation, setSelectedLocation] = useState(locations[0].value);

  useEffect(() => {
    let snapShot = props.navigation.getParam("picture");
    if (snapShot) {
      setImage({ ...snapShot });
    }
  }, [props.navigation]);

  const handleLocation = (itemVal) => {
    console.log(itemVal);
    return setSelectedLocation(itemVal);
  };

  const handleCategory = (itemVal) => {
    return setSelectedCategory(itemVal);
  };

  const handleTitle = (text) => {
    return setTitle(text);
  };

  const handleBody = (text) => {
    return setBody(text);
  };

  const openImagePickerAsync = async () => {
    console.log("hello");
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    if (permissionResult.granted === false) {
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setImage({ uri: pickerResult.uri });
    console.log(pickerResult);
  };

  const openCamera = () => {
    props.navigation.navigate({
      routeName: "Camera",
    });
  };
  const dismissKeyboard = () => Keyboard.dismiss();

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.screen}>
        <View style={styles.form}>
          <FormControl value={title} onChange={handleTitle}>
            Title
          </FormControl>
          <FormControl
            value={selectedLocation}
            onChange={handleLocation}
            type="picker"
            pickerItems={locations}
          >
            Location
          </FormControl>
          <FormControl
            value={selectedCategory}
            onChange={handleCategory}
            type="multi"
            pickerItems={categories}
          >
            Categories
          </FormControl>
          <FormControl type="body" value={body} onChange={handleBody}>
            Contents
          </FormControl>
          <View style={styles.formControl}>
            <AllerRg style={styles.label}>Select Images</AllerRg>
          </View>
          <View
            style={{
              ...styles.formControl,
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <TriggerButton
              selectedImage={image}
              handlePress={openImagePickerAsync}
            >
              From Gallery
            </TriggerButton>
            <TriggerButton selectedImage={image} handlePress={openCamera}>
              From Camera
            </TriggerButton>
          </View>
          <View>
            {image.uri !== null && (
              <Image source={{ ...image }} style={styles.thumbnail} />
            )}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: defaultStyles.screen,
  form: {
    ...defaultStyles.container,
    padding: 10,
  },
  formControl: { width: "100%" },
  label: { marginVertical: 8 },
  picker: { width: "100%", height: 50 },
  thumbnail: {
    width: Dimensions.get("window").width * 0.5,
    height: Dimensions.get("window").height * 0.2,
    resizeMode: "contain",
  },
});

export default CreateNewScreen;
