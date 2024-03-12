// Logo.js
import React from 'react';
import { View, Text } from 'react-native';

// Logo component for the application
const Logo = () => {
  return (
    <View style={{ alignItems: 'center', marginTop: 50, marginBottom: 10 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'tomato' }}>Fitness Calendar</Text>
    </View>
  );
};

export default Logo;
