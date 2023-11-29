import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MenuInicio } from '../screen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabsPrueba (){
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={MenuInicio}/>
    </Tab.Navigator>
  );
}
export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Menu' component={ TabsPrueba } />
    </Stack.Navigator>
  );
};
