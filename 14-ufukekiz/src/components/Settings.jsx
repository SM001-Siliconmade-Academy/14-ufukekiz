import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from '@expo/vector-icons';

const Settings = () => {
  return (
      <TouchableOpacity style={styles.container}>
        <MaterialIcons name="settings" size={30} color="black" />
      </TouchableOpacity>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    marginRight: 15,
  },
});
