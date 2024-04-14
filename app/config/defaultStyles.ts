import { Platform } from "react-native";

export default {
    text:{
        fontSize: 18,
        flex: 1,
    ...Platform.select({
      ios: {
        fontFamily: "Avenir",
      },
      android: {
        fontFamily: "Roboto",
      },
    }),
    }
}