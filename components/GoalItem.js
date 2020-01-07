import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

const GoalItem = props => {
    return (
        <TouchableNativeFeedback onPress={props.onPress.bind(this, props.id)}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableNativeFeedback>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 10
    }
});
export default GoalItem;