// AddWorkoutScreen.js
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import WorkoutContext from './WorkoutContext';
import { commonStyles, colors } from './styles';

// Component for adding a new workout
export default function AddWorkoutScreen() {
  const { setWorkouts } = useContext(WorkoutContext);
  const [sport, setSport] = useState('running');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const sports = ['running', 'cycling', 'swimming'];

  // Function to save the workout
  const saveWorkout = () => {
    // Check for empty fields
    if (!distance.trim() || !duration.trim()) {
      Alert.alert('Invalid input', 'Distance and duration cannot be empty');
      return;
    }

    // Validate input values
    const distanceValue = parseFloat(distance);
    const durationValue = parseFloat(duration);
    if (isNaN(distanceValue) || isNaN(durationValue) || distanceValue <= 0 || durationValue <= 0) {
      Alert.alert('Invalid input', 'Distance and duration must be positive numbers');
      return;
    }

    // Add new workout to the list
    setWorkouts(prevWorkouts => [
      ...prevWorkouts,
      {
        sport,
        distance: distanceValue,
        duration: durationValue,
        date: date.toISOString(),
      },
    ]);

    // Reset input fields
    setSport('running');
    setDistance('');
    setDuration('');
    setDate(new Date());
  };

  // Function to open date picker
  const openDatePicker = () => {
    setShowDatePicker(true);
  };

  // Function to handle date change
  const onDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.label}>Sport:</Text>
      <Picker
        selectedValue={sport}
        onValueChange={itemValue => setSport(itemValue)}
        style={commonStyles.input}
      >
        {sports.map(sport => (
          <Picker.Item key={sport} label={sport} value={sport} />
        ))}
      </Picker>
      <Text style={commonStyles.label}>Distance:</Text>
      <TextInput
        style={commonStyles.input}
        placeholder="Distance"
        keyboardType="numeric"
        value={distance}
        onChangeText={setDistance}
      />
      <Text style={commonStyles.label}>Duration: (In minutes)</Text>
      <TextInput
        style={commonStyles.input}
        placeholder="Duration"
        keyboardType="numeric"
        value={duration}
        onChangeText={setDuration}
      />
      <Text style={commonStyles.label}>Date:</Text>
      <TextInput
        style={commonStyles.input}
        placeholder="Date"
        value={date.toLocaleDateString()}
        onFocus={openDatePicker}
      />
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onDateChange}
        />
      )}
      <Button
        title="Save"
        onPress={saveWorkout}
        color={colors.primary}
      />
    </View>
  );
}
