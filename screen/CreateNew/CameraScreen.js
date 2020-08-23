import React, { useState, useEffect, useRef } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { MaterialIcons } from "@expo/vector-icons";

const CameraScreen = (props) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const camera = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return props.navigation.goBack();
  }

  const switchCam = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const snap = async () => {
    let photo;
    if (camera.current) {
      photo = await camera.current.takePictureAsync();
    }
    props.navigation.navigate({
      routeName: "CreateNew",
      params: {
        picture: { uri: photo.uri },
      },
    });
  };
  return (
    <View style={{ flex: 1 }}>
      <Camera ref={camera} style={{ flex: 1 }} type={type}>
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row",
            justifyContent: "space-around",
            margin: 20,
          }}
        >
          <TouchableOpacity
            style={{
              alignSelf: "flex-end",
              alignItems: "center",
            }}
            onPress={switchCam}
          >
            <MaterialIcons
              name="switch-camera"
              style={{ color: "#fff", fontSize: 40 }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              alignSelf: "flex-end",
              alignItems: "center",
            }}
            onPress={snap}
          >
            <MaterialIcons
              name="camera-alt"
              style={{ color: "#fff", fontSize: 40 }}
            />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

export default CameraScreen;
