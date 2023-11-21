import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { validateEmail } from '../utils/Verificador';
const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email.trim() === '' || password.trim() === '') {
      Alert.alert('Error', 'Por favor, ingresa el correo y la contraseña.');
    } else if (!validateEmail(email)) {
      Alert.alert('Error', 'Por favor, ingresa un correo electrónico válido.');
    } else {
      // Aquí puedes realizar la lógica de autenticación y, si es exitosa, navegar a la pantalla principal.
      navigation.navigate('Menú');
    }
  };

  const handleForgotPassword = () => {
    // Implementa la lógica para manejar el caso de "Olvidaste la contraseña".
    Alert.alert('Olvidaste la Contraseña', 'Se ha enviado un correo electrónico de recuperación.');
  };

  const handleRegister = () => {
    // Implementa la lógica para manejar el caso de "Registrarse".
    navigation.navigate('Registro');
  };

  const handleLoginWithGoogle = () => {
    // Implementa la lógica para manejar la autenticación con Google.
    Alert.alert('Iniciar Sesión con Google', 'Iniciando sesión con Google...');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Iniciar Sesión</Text>
      <TextInput
        style={[styles.input, !validateEmail(email) && styles.inputError]}
        placeholder="Correo electrónico"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.boton} onPress={handleLogin}>
        <Text style={styles.textoBoton}>Iniciar Sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.link}>¿Olvidaste la Contraseña?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.link}>Registrarse</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.googleButton} onPress={handleLoginWithGoogle}>
        <Text style={styles.textoBoton}>Iniciar Sesión con Google</Text>
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
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
  },
  inputError: {
    borderColor: 'red',
  },
  boton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  textoBoton: {
    color: 'white',
    fontSize: 16,
  },

  link: {
    color: '#007bff',
    fontSize: 16,
    marginTop: 10,
  },

  googleButton: {
    backgroundColor: '#4285F4', // Color de Google
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
});

export default LoginScreen;
