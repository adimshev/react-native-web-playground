import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {enableScreens} from 'react-native-screens';
import Screen from './Screen';

enableScreens();

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Screen} />
        <Stack.Screen name="Second" component={Screen} />
        <Stack.Screen name="Third" component={Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
