import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../config';

export const PasswordResetScreen = () => {
  const [email, setEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);

  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setResetSent(true);
    } catch (error) {
      console.error('Error al mandar mensaje:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingrese su correo electrónico para restablecer la contraseña.</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Button title="Restablecer Contraseña" onPress={handleResetPassword} />
      {resetSent && (
        <Text style={styles.successMessage}>
          Se ha enviado un enlace para restablecer la contraseña a su correo electrónico.
        </Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 16,
    },
    title: {
      fontSize: 18,
      marginBottom: 20,
    },
    input: {
      width: '100%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 20,
      padding: 10,
      borderRadius: 5,
    },
    successMessage: {
      color: 'green',
      marginTop: 10,
    },
  });