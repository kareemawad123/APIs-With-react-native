import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, } from 'react-native';
import CheckBox from 'expo-checkbox';

const TodoTask = (props) => {
    const [isCompleted, setDone] = useState(props.task.isCompleted);
    const [isDeleted, setDelete] = useState(props.task.isDeleted);
    const [task, setTask] = useState(props.task);
    return (
        <View style={[styles.task,{display:isDeleted?'none':'flex'}]}>
            <Text style={[styles.taskText, {textDecorationLine: isCompleted? 'line-through' : 'none'}]}>{props.task.task} </Text>
            <View style={styles.rowControls}>
                <View style={[styles.row,{marginRight: 10}]}>
                    <Text style={{marginRight: 5}}>Complete:</Text>
                    <CheckBox
                        value={isCompleted}
                        onValueChange={setDone}
                        style={styles.checkbox}
                    ></CheckBox>
                </View>

                <View style={[styles.row,{marginRight: 10}]}>
                    <Text style={{marginRight: 5}}>Delete:</Text>
                    <CheckBox
                        value={isDeleted}
                        onValueChange={setDelete}
                        style={styles.checkbox}
                    ></CheckBox>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    task: {
        backgroundColor: 'orange',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        marginBottom: 10,
    },
    taskText: {
        flex: 1,
        fontWeight: 'bold',
        marginRight: 10,
        alignSelf: 'center',
    },
    rowControls:{
        // flex: 1,
        // backgroundColor: 'red',
        flexDirection: 'row',
        // justifyContent: 'flex-end',
    },
    row: {
        flexDirection: 'row',
    }
})

export default TodoTask;
