import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, MenuInicio, PasswordResetScreen, RegistroScreen } from '../screen';

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Register' component={RegistroScreen} />
      <Stack.Screen name='PasswordReset' component={PasswordResetScreen} />
    </Stack.Navigator>
  );
};
