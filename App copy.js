import React, {useState} from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import Button from './components/Button/button';
import Input from './components/Input/input';
import Temperature from './components/Temperature/temperature';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  const hotOrCold = useState(true);

  return (

        <ImageBackground
          style={s.mainContainer}         
          source={hotOrCold ? require('./assets/hot.png') : require('./assets/cold.png')}
          resizeMode="cover"
          >
            <View style={s.container}>

              <View>
                <Temperature/>
              </View>
              
              <View>
                <Input/>
              </View>

              <View>
                <Button/>
              </View>
              
            </View>
        </ImageBackground>



  );
}

const s = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover', 
  },  
  container: {
    flex: 0.5,
    alignItems: 'center',
  },
});