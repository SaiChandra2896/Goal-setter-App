import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);



  const addGoalHandler = (goal) => {
    setCourseGoals(currentGoals => [...currentGoals, { key: Math.random().toString(), value: goal }]);
  };

  const removeGoalHandler = goalkey => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.key !== goalkey);
    });
  }

  return (
    <View style={styles.screen}>
      <GoalInput onPress={addGoalHandler} />
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
