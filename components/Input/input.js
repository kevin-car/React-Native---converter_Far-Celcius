import React from 'react';
import { TextInput,  View, StyleSheet, Text } from 'react-native';

export default function Input({defaultValue, onChangeText, unit}) {
  return (
    <View style={s.container}>
      <TextInput 
        placeholder='tappe un température' 
        keyboardType='numeric'
        maxLength={4}
        defaultValue={defaultValue}
        style={s.input}
        onChangeText={onChangeText}
        /> 
        <Text style={s.unit} >
          {unit}
        </Text>

    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: 'center',
    height: 50,

  }, 
  input: {
    backgroundColor: 'white',
    height: 50,
    width: "100%",
    borderRadius: 20, 
    paddingLeft: 24
  },  
  unit: {
    position: "absolute", 
    fontSize: 35,
    justifyContent: 'flex-end',
    color: 'red',
    right: 0,
    marginRight: 10,
    marginTop: 4
  }
});

