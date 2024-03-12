// WorkoutsScreen.js
import React, { useContext } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { commonStyles } from './styles';
import WorkoutContext from './WorkoutContext';
import WorkoutList from './WorkoutList';

// Component for displaying workouts
export default function WorkoutsScreen() {
  const { workouts, units } = useContext(WorkoutContext);

  // Function to calculate total distance for a specific sport
  const calculateSportTotal = (sport) => {
    return workouts
      .filter(w => w.sport === sport)
      .reduce((total, workout) => total + parseFloat(workout.distance), 0)
      .toFixed(2);
  };

  return (
    <View style={commonStyles.container}>
      <View style={commonStyles.statsContainer}>
        <Text style={commonStyles.statsText}>Running: {units === 'km' ? calculateSportTotal('running') : (calculateSportTotal('running') * 0.62).toFixed(2)} {units}</Text>
        <Text style={commonStyles.statsText}>Cycling: {units === 'km' ? calculateSportTotal('cycling') : (calculateSportTotal('cycling') * 0.62).toFixed(2)} {units}</Text>
        <Text style={commonStyles.statsText}>Swimming: {units === 'km' ? calculateSportTotal('swimming') : (calculateSportTotal('swimming') * 0.62).toFixed(2)} {units}</Text>
      </View>
      <ScrollView style={commonStyles.workoutListContainer}>
        <WorkoutList workouts={workouts} units={units} />
      </ScrollView>
    </View>
  );
}
