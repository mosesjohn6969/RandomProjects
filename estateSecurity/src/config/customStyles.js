import { Platform } from "react-native";

import colors from "./colours";

export default {
    text: {
        color: colors.dark,
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    },
    pickerText: {
        color: colors.dark,
        fontSize: 17,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    },
    errorMessage: {
        color: "red"
    },
    TextInput: {
        fontWeight: "600",
        fontFamily: "Montserrat-Black",
        color: "#343F55"
    },
}

