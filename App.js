import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/screen/LoginScreen';
import MenuInicio from './components/screen/MenuInicio';
import RegistroScreen from './components/screen/RegistroScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Inicio" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Menú" component={MenuInicio} options={{headerShown: false}}/>
        <Stack.Screen name="Registro" component={RegistroScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
