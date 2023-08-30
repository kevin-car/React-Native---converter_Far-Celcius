import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Temperature({value, unit}) {
  return (
    <View style={s.container}>
      <Text style={s.text}> {value} {unit} </Text>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: 'center', // Aligne horizontalement au centre

  },
  text : {
    color: 'white',
    fontSize: 36,
    textAlign: 'center', // Aligne le texte au centre horizontalement

  } 

});