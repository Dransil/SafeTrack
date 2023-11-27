import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';

export const LoadIndicator = () => {
  return (
    <ActivityIndicator size='large' color='blue' />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
