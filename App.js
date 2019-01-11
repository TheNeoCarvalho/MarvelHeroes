import { StackNavigator } from "react-navigation";

import Home from "./src/screens/Home";

export default StackNavigator(
  {
    Main: {
      screen: Home
    }
  },
  {
    navigationOptions: {
      title: "Marvel Heroes",
      headerStyle: {
        backgroundColor: "red",
        borderBottomWidth: 1,
        borderBottomColor: "#c5c5c5",
        marginBottom: 15
      },
      headerTitleStyle: {
        fontSize: 30,
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        flex: 1
      }
    }
  }
);
