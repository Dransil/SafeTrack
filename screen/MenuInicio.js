import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MenuInicio = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>¡Bienvenido a la Página Principal!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default MenuInicio;
