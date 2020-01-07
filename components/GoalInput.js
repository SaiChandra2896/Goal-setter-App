import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onPress(enteredGoal);
        setEnteredGoal('')
    };

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput placeholder='Add goal' style={styles.input} onChangeText={goalInputHandler} value={enteredGoal} />
                <Button title='Add' onPress={addGoalHandler} />
                <Button title='CANCEL' color='red' onPress={props.onCancel} />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    input: {
        width: '80%',
        borderBottomColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
});

export default GoalInput;