import { DefaultTheme } from "@react-navigation/native";
import appcolors from "../config/appcolors";


export default {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: appcolors.primary,
        background: appcolors.white
    }
}