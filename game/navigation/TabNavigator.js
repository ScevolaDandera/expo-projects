import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen, GameScreen, SettingScreen } from '../screens';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Game" component={GameScreen} 
      options={
        {headerShown: false,
        tabBarStyle: { display: "none"}}
        } />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;