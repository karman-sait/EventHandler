import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = useState('');

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={setTaskText}
        value={taskText}
        placeholderTextColor="#999"
      />
      <Button
        title="Add Task"
        onPress={() => {
          if (taskText) {
            addTask(taskText);
            setTaskText('');
          }
        }}
        color="#5cb85c"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    width: '90%',
    marginTop: 20,
  },
  input: {
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    fontSize: 16,
  }
});

export default ToDoForm;
