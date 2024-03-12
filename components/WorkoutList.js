// WorkoutList.js
import React from 'react';
import { View, Text } from 'react-native';
import { commonStyles } from './styles';

// Component for displaying a list of workouts
export default function WorkoutList({ workouts, units }) {
  return (
    <View style={commonStyles.workoutContainer}>
      {workouts.map(workout => (
        <View key={workout.date} style={commonStyles.workout}>
          <Text style={commonStyles.workoutText}>{new Date(workout.date).toLocaleDateString()}</Text>
          <Text style={commonStyles.workoutText}>{workout.sport}</Text>
          <Text style={commonStyles.workoutText}>
            {units === 'km'
              ? `${workout.distance} ${units}`
              : `${(workout.distance * 0.62).toFixed(2)} ${units}`}
          </Text>
          <Text style={commonStyles.workoutText}>{workout.duration} mins</Text>
        </View>
      ))}
    </View>
  );
}