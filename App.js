import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Background from './components/Background';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  const addTask = () => {
    if (taskText.trim()) {
      setTasks([...tasks, { text: taskText, completed: false }]);
      setTaskText(""); 
    }
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <Background>
      <View style={{ padding: 20, maxWidth: 400, margin: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 10 }}>
        <Text style={{ fontSize: 24, marginBottom: 20 }}>Lista de Tareas</Text>
        <TaskInput taskText={taskText} setTaskText={setTaskText} addTask={addTask} />
        <TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask} />
      </View>
    </Background>
  );
}