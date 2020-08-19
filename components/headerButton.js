import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import Colors from "../constants/Colors";

export const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={FontAwesome}
      iconSize={23}
      color={Colors.accent}
    />
  );
};

export const CustomHeaderButton2 = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Colors.accent}
    />
  );
};
