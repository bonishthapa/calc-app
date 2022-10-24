import * as React from "react";
import Buttons from "./Buttons";
import { View, Text } from "react-native";
import { Styles } from "../styles/GlobalStyles";
import { myColors } from "../styles/Colors";

export default MyKeyboard = () => {
  const [firstNumber, setFirstNumber] = React.useState("");
  const [secondNumber, setSecondNumber] = React.useState("");
  const [operation, setOperation] = React.useState("");
  const [result, setResult] = React.useState("");

  const handleNumberPress = (ButtonsValue) => {
    if (firstNumber.length < 10) {
      setFirstNumber(firstNumber + ButtonsValue);
    }
  };

  const handleOperationPress = (ButtonsValue) => {
    setOperation(ButtonsValue);
    setSecondNumber(firstNumber);
    setFirstNumber("");
  };

  const clear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");
    setResult(null);
  };

  const firstNumberDisplay = () => {
    if (result !== null) {
      return (
        <Text
          style={
            result < 99999
              ? [Styles.screenFirstNumber, { color: myColors.result }]
              : [
                  Styles.screenFirstNumber,
                  { fontSize: 50, color: myColors.result },
                ]
          }
        >
          {result?.toString()}
        </Text>
      );
    }
    if (firstNumber && firstNumber.length < 6) {
      return <Text style={Styles.screenFirstNumber}>{firstNumber}</Text>;
    }
    if (firstNumber === "") {
      return <Text style={Styles.screenFirstNumber}>{"0"}</Text>;
    }
    if (firstNumber.length > 5 && firstNumber.length < 8) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 70 }]}>
          {firstNumber}
        </Text>
      );
    }
    if (firstNumber.length > 7) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 50 }]}>
          {firstNumber}
        </Text>
      );
    }
  };

  const getResult = () => {
    switch (operation) {
      case "+":
        clear();
        setResult(parseInt(secondNumber) + parseInt(firstNumber));
        break;
      case "-":
        clear();
        setResult(parseInt(secondNumber) - parseInt(firstNumber));
        break;
      case "*":
        clear();
        setResult(parseInt(secondNumber) * parseInt(firstNumber));
        break;
      case "/":
        clear();
        setResult(parseInt(secondNumber) / parseInt(firstNumber));
        break;
      default:
        clear();
        setResult(0);
        break;
    }
  };

  return (
    <View style={Styles.viewBottom}>
      <View
        style={{
          height: 120,
          width: "90%",
          justifyContent: "flex-end",
          alignSelf: "center",
        }}
      >
        <Text style={Styles.screenSecondNumber}>
          {secondNumber}
          <Text style={{ color: "purple", fontSize: 50, fontWeight: "500" }}>
            {operation}
          </Text>
        </Text>
        {firstNumberDisplay()}
      </View>
      <View style={Styles.row}>
        <Buttons title="C" isGray onPress={clear} />
        <Buttons
          title="+/-"
          isGray
          onPress={() => handleOperationPress("+/-")}
        />
        <Buttons title="％" isGray onPress={() => handleOperationPress("％")} />
        <Buttons title="÷" isBlue onPress={() => handleOperationPress("/")} />
      </View>
      <View style={Styles.row}>
        <Buttons title="7" onPress={() => handleNumberPress("7")} />
        <Buttons title="8" onPress={() => handleNumberPress("8")} />
        <Buttons title="9" onPress={() => handleNumberPress("9")} />
        <Buttons title="×" isBlue onPress={() => handleOperationPress("*")} />
      </View>
      <View style={Styles.row}>
        <Buttons title="4" onPress={() => handleNumberPress("4")} />
        <Buttons title="5" onPress={() => handleNumberPress("5")} />
        <Buttons title="6" onPress={() => handleNumberPress("6")} />
        <Buttons title="-" isBlue onPress={() => handleOperationPress("-")} />
      </View>
      <View style={Styles.row}>
        <Buttons title="1" onPress={() => handleNumberPress("1")} />
        <Buttons title="2" onPress={() => handleNumberPress("2")} />
        <Buttons title="3" onPress={() => handleNumberPress("3")} />
        <Buttons title="+" isBlue onPress={() => handleOperationPress("+")} />
      </View>
      <View style={Styles.row}>
        <Buttons title="." onPress={() => handleNumberPress(".")} />
        <Buttons title="0" onPress={() => handleNumberPress("0")} />
        <Buttons
          title="⌫"
          onPress={() => setFirstNumber(firstNumber.slice(0, -1))}
        />
        <Buttons title="=" isBlue onPress={() => getResult()} />
      </View>
    </View>
  );
};
