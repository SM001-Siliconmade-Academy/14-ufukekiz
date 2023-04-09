import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const TabButton = ({ children, active = false, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, active && styles.activeContainer]}
    >
      <Text style={[styles.text, active && styles.activeText]}>{children}</Text>
    </TouchableOpacity>
  );
};

export default TabButton;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    backgroundColor: "#CF2C7C77",
    borderRadius: 10,
    width: 150,
    alignItems: "center",
  },
  activeContainer: {
    backgroundColor: "#CF2C7C",
  },
  text: {
    color: "white",
  },
  
  activeText: {
    color: "white",
  },
});
