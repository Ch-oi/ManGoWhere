import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  Button,
  Picker,
} from "react-native";
import { useSelector } from "react-redux";
import defaultStyles from "../../constants/default-styles";
import FormControl from "../../components/CreateNew/FormControl";

const CreateNewScreen = (props) => {
  const locations = useSelector((state) =>
    state.map.locations.map((location) => {
      let { id, en } = location;
      return { id, en };
    })
  );

  const categories = useSelector((state) => state.posts.categories);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    categories[0].category
  );

  const [selectedLocation, setSelectedLocation] = useState(locations[0].en);

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

  return (
    <ScrollView>
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
            type="picker"
            pickerItems={categories}
          >
            Categories
          </FormControl>
          <FormControl type="body" value={body} onChange={handleBody}>
            Contents
          </FormControl>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: defaultStyles.screen,
  form: {
    ...defaultStyles.container,
    padding: 10,
  },
  picker: { width: "100%", height: 50 },
  label: {},
  input: {},
});

export default CreateNewScreen;
