import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import Buttons from "./src/components/Buttons";
import MyKeyboard from "./src/components/MyKeyboard";
import { themeContext } from "./src/context/ThemeContext";
import { myColors } from "./src/styles/Colors";

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <themeContext.Provider value={theme}>
      <View
        style={
          theme === "light"
            ? styles.container
            : [styles.container, { backgroundColor: "#000" }]
        }
      >
        <StatusBar style="auto" />
        <Switch
          value={theme === "light"}
          onValueChange={() => setTheme(theme === "light" ? "dark" : "light")}
        />
        <MyKeyboard />
      </View>
    </themeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
