import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TaskItem({ task, index, toggleTaskCompletion, deleteTask }) {
  return (
    <View style={styles.taskContainer}>
      
      <TouchableOpacity onPress={() => toggleTaskCompletion(index)} style={styles.checkbox}>
        <Text style={styles.checkboxText}>
          {task.completed ? '✅' : '⬜'}
        </Text>
      </TouchableOpacity>
      
      
      <Text style={[styles.taskText, task.completed && styles.completed]}>
        {task.text}
      </Text>

      
      <TouchableOpacity onPress={() => deleteTask(index)} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>🗑️</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#F4F4F4', 
    padding: 10, 
    borderRadius: 8, 
    marginVertical: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  checkbox: {
    marginRight: 10, 
  },
  checkboxText: {
    fontSize: 18, 
  },
  taskText: {
    flex: 1, 
    fontSize: 16, 
    color: '#333',
  },
  completed: {
    textDecorationLine: 'line-through', 
    color: '#A9A9A9', 
  },
  deleteButton: {
    marginLeft: 10, 
    padding: 5, 
    backgroundColor: '#FFCDD2', 
    borderRadius: 8, 
  },
  deleteButtonText: {
    color: 'red', 
    fontSize: 16, 
  },
});