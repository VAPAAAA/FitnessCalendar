// App.js
import React, { useState, useRef } from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import AddWorkoutScreen from './components/AddWorkoutScreen';
import WorkoutsScreen from './components/WorkoutsScreen';
import SettingsScreen from './components/SettingsScreen';
import WorkoutContext from './components/WorkoutContext';
import Logo from './components/Logo'; 

const Tab = createBottomTabNavigator();

// Main component for the application
export default function App() {
  const [workouts, setWorkouts] = useState([]);
  const [units, setUnits] = useState('km');
  const navigationRef = useRef(null);

  return (
    <WorkoutContext.Provider value={{ workouts, setWorkouts, units, setUnits }}>
      <NavigationContainer ref={navigationRef}>
        <View style={{ flex: 1 }}>
          {/* Logo component */}
          <Logo />

          {/* Bottom Tab Navigator */}
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Add Workout') {
                  iconName = focused ? 'add-circle' : 'add-circle-outline';
                } else if (route.name === 'Workouts') {
                  iconName = focused ? 'fitness' : 'fitness-outline';
                } else if (route.name === 'Settings') {
                  iconName = focused ? 'settings' : 'settings-outline';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
              tabBarStyle: {
                display: 'flex',
              },
            })}
          >
            <Tab.Screen name="Add Workout" component={AddWorkoutScreen} />
            <Tab.Screen name="Workouts" component={WorkoutsScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </View>
      </NavigationContainer>
    </WorkoutContext.Provider>
  );
}
