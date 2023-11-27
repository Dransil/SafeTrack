import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { validateEmail } from '../utils/Verificador';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export const RegistroScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegistro = async () => {
    if (email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      Alert.alert('Error', 'Por favor, completa todos loss campos.');
    } else if(!validateEmail(email)){
      Alert.alert('Error', 'Por favor, ingresa un correo electrónico válido.');
    } else if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden.');
    }else {
      try {
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password);
        Alert.alert('Registro Exitoso', 'Usuario registrado correctamente.');
        navigation.navigate('Menu');
      } catch (error) {
        console.error('Error al registrar usuario:', error.message);
        Alert.alert('Error', 'Hubo un error durante el registro. Por favor, inténtalo de nuevo.');
      }
      Alert.alert('Error', 'Hubo un error durante el registro. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Registrarse</Text>
      <Text style={styles.texto}>Introduzca su correo</Text>
      <TextInput
        style={[styles.input, !validateEmail(email) && styles.inputError]}
        placeholder="Correo electrónico"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text style={styles.texto}>Introduzca su contraseña</Text>
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Text style={styles.texto}>Confirme su contraseña</Text>
      <TextInput
        style={[styles.input, password !== confirmPassword && styles.inputError]}
        placeholder="Confirme Contraseña"
        onChangeText={(text) => setConfirmPassword(text)}
        value={confirmPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.boton} onPress={handleRegistro}>
        <Text style={styles.textoBoton}>Registrarse</Text>
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
  texto: {
    fontSize :12,
    color: '#959595',
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
  boton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  inputError: {
    borderColor: 'red',
  },
  textoBoton: {
    color: 'white',
    fontSize: 16,
  },
});

export default RegistroScreen;
