// SettingsScreen.js
import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { commonStyles } from './styles';
import WorkoutContext from './WorkoutContext';

export default function SettingsScreen() {
  const { units, setUnits } = useContext(WorkoutContext);

  const updateUnits = selectedUnits => {
    setUnits(selectedUnits);
  };

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.label}>Units</Text>
      <Picker
        selectedValue={units}
        onValueChange={updateUnits}
        style={commonStyles.input}
      >
        <Picker.Item label="Kilometers" value="km" />
        <Picker.Item label="Miles" value="mi" />
      </Picker>
    </View>
  );
}
