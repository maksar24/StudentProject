import { StyleSheet, TouchableOpacity } from "react-native";

import { Colors } from "../../constants/Colors";

const Button = ({ children, onPress, buttonStyle }) => {
  return (
    <TouchableOpacity style={[style.button, buttonStyle]} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;

const style = StyleSheet.create({
  button: {
    borderRadius: 100,
    backgroundColor: Colors.orange,
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
});
