import React from "react";
import {
  useFonts,
  Ubuntu_300Light,
  Ubuntu_300Light_Italic,
  Ubuntu_400Regular,
  Ubuntu_400Regular_Italic,
  Ubuntu_500Medium,
  Ubuntu_500Medium_Italic,
  Ubuntu_700Bold,
  Ubuntu_700Bold_Italic,
} from "@expo-google-fonts/ubuntu";
import Router from "./src/routes/Router";

const App = () => {
  const [loaded] = useFonts({
    'light': Ubuntu_300Light,
    'lightItalic': Ubuntu_300Light_Italic,
    'regular': Ubuntu_400Regular,
    'regularItalic': Ubuntu_400Regular_Italic,
    'medium': Ubuntu_500Medium,
    'mediumItalic': Ubuntu_500Medium_Italic,
    'bold': Ubuntu_700Bold,
    'boldItalic': Ubuntu_700Bold_Italic,
  });
  return loaded ? <Router /> : null;
};

export default App;
