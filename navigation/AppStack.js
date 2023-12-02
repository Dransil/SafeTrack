import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MenuInicio } from '../screen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabsPrueba (){
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name='Home' component={ MenuInicio }/>
      <Tab.Screen name='Home2' component={ MenuInicio }/>
      <Tab.Screen name='Home3' component={ MenuInicio }/>
    </Tab.Navigator>
  );
}
export const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Menu' component={ TabsPrueba } />
    </Stack.Navigator>
  );
};
