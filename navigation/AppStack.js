import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { MenuInicio } from '../screen';

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Menu' component={ MenuInicio } />
    </Stack.Navigator>
  );
};
