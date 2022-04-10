import { StyleSheet, ViewStyle, TextStyle, FlexAlignType } from "react-native";

export const Style = {
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignSelf: "flex-start",
    flexGrow: 0,
    backgroundColor: "purple",
  } as ViewStyle,
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  } as TextStyle,
  buttonContainer: {
    alignItems: "flex-start",
    flex: 1,
  } as ViewStyle,
}
