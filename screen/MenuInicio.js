import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { auth } from '../config';
import { signOut } from 'firebase/auth';

export const MenuInicio = () => {
  const handleLogout = () =>{
    signOut(auth).catch(error => console.log('Error al salir de cuenta', error));
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>¡Bienvenido a la Página Principal 2!</Text>
      <TouchableOpacity style={styles.ButtonMenu} onPress={handleLogout}>
        <Text style={styles.textoBoton}>Salir</Text>
      </TouchableOpacity>
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
  ButtonMenu: {
    backgroundColor: '#4285F4', 
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  textoBoton: {
    color: 'white',
    fontSize: 16,
  },
});
