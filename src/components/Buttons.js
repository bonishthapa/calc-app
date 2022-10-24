import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { themeContext } from "../context/ThemeContext";
import { Styles } from "../styles/GlobalStyles";

export default Buttons = ({ title, onPress, isGray, isBlue }) => {
  const theme = useContext(themeContext);
  return (
    <TouchableOpacity
      style={
        isBlue
          ? Styles.btnBlue
          : isGray
          ? Styles.btnGray
          : theme === "light"
          ? Styles.btnLight
          : Styles.btnDark
      }
      onPress={onPress}
    >
      <Text
        style={
          isBlue || isGray
            ? Styles.smallTextLight
            : theme === "dark"
            ? Styles.smallTextLight
            : Styles.smallTextDark
        }
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
