


import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function Input({onPress, unit }) {
  return (
    <View style={s.container}>
      <TouchableOpacity 
        onPress={onPress}
        style={s.button}>
          <Text style={s.text}>Convertir en {unit}</Text>
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    padding: 24,
  },
  button: { 
    backgroundColor: 'black', 
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 30, 
    width: 250, 
  },
  text: {
    color: 'white',
    alignSelf: 'center'
  }
});