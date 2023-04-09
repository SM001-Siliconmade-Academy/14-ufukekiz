import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from '@expo/vector-icons';

const QuestionMark = () => {
  return (
      <TouchableOpacity style={styles.container}>
        <FontAwesome name="question-circle-o" size={20} color="black" />
      </TouchableOpacity>
  );
};

export default QuestionMark;

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
});
