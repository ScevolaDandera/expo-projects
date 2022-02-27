import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen, GameScreen } from '../screens';
import  BottomTabNavigator  from './TabNavigator';

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Tabs' component={BottomTabNavigator} options={{ headerShown: false}} />
    </Stack.Navigator>
    
  );
};
