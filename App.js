import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import style from './style';
import React, { useState } from 'react';
import TodoTask from './components/todoTask';
import uuid from 'react-native-uuid';




export default function App() {

  const [todoTasks, todoTasksState] = useState([
    // { task: 'Task1', isCompleted: false, isDeleted: false, id: uuid.v4() },
    // { task: 'Task2', isCompleted: true, isDeleted: false , id: uuid.v4()}
  ]);
  const [taskInput, setTaskInput] = useState({ task: taskInput, isCompleted: false, isDeleted: false, id: uuid.v4() });

  // const handleChangeTasks = () => { setTasks({...tasks, taskInput}); };

  return (
    <SafeAreaView style={style.container}>
      <View style={style.headerContainer}>
        <Text style={style.textHeader}>ToDo App</Text>
      </View>
      <View style={style.mainContainer}>
        {/* Input Area */}
        <View style={style.rowToDo}>
          <TextInput
            style={style.textInput}
            placeholder='Tasks '
            // value={taskInput}

            onChangeText={(val) => {
              console.warn(val);
              setTaskInput((task) => ({ ...task, task: val, id: uuid.v4() }));
            }}
          ></TextInput>
          <View style={style.buttonStyle}>
            <Button

              onPress={() => {

                console.warn(taskInput);
                // console.warn(taskInput.id);
                todoTasksState((tasks) => [...tasks, taskInput]);
                // console.warn(todoTasks.length);

              }}
              title="Add"
              color='orange'
            />
          </View>
        </View>
        {/* Display Area */}
        <View style={style.tasksArea}>
          <FlatList
            keyExtractor={ (task)=> task.id}
            data={todoTasks}
            renderItem={({ item }) => <TodoTask task={item} ></TodoTask>}
          ></FlatList>
          {/* <TodoTask ></TodoTask> */}
        </View>


      </View>


    </SafeAreaView>
  );
}

