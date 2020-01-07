import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false)



  const addGoalHandler = (goal) => {
    setCourseGoals(currentGoals => [...currentGoals, { key: Math.random().toString(), value: goal }]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalkey => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.key !== goalkey);
    });
  };

  const cancelGoalAddHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title='Add new goal' onPress={() => setIsAddMode(true)} />
      <GoalInput onPress={addGoalHandler} visible={isAddMode} onCancel={cancelGoalAddHandler} />
      <FlatList
        data={courseGoals} renderItem={itemData => <GoalItem title={itemData.item.value} onPress={removeGoalHandler} id={itemData.item.key} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },

});
