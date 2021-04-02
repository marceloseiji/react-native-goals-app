import React from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";

const GoalInput = (props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.textInput}
        onChangeText={props.goalInputHandler}
        value={props.enteredGoal}
      />
      <Button title="ADD" onPress={props.addGoalHandleer} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    borderColor: "black",
    borderWidth: 1,
    width: "70%",
  },
});

export default GoalInput;
