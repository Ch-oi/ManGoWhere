import { Dimensions } from "react-native";

export default {
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  container: {
    backgroundColor: "white",
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  buttonContainer: {
    height: 40,
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
    marginTop: 12,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
    shadowColor: "black",
    borderWidth: 1,
  },
  header: {
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#fff",
      },
      headerTintColor: "#E08553",
      headerTitleStyle: {
        fontWeight: "bold",
        fontStyle: "italic",
      },
    },
  },
};
