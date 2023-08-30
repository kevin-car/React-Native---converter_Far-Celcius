import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import Button from './components/Button/button';
import Input from './components/Input/input';
import Temperature from './components/Temperature/temperature';

import coldBackground from './assets/cold.png'
import hotBackground from './assets/hot.png'

import { DEFAULT_TEMPERATURE, DEFAULT_UNITS } from './constante';

import { getOppositUnit, convertTemperature, isColdTemperature, isIceTemperature } from './services/temperatureconvertor';

export default function App() {

  const hotOrCold = useState(true);
  const [temperature, setTemperature] = useState(DEFAULT_TEMPERATURE)
  const [unit, setUnit] = useState(DEFAULT_UNITS)
  const [currentBackground, setcurrentBackground] = useState()


  const image = () => {
    if(temperature < 50 ) return coldBackground
    else return hotBackground
  }

  const oppositeUnit = getOppositUnit(unit)

  useEffect(() => {
    const temperatureAsFloat = temperature;
    if(!isNaN(temperatureAsFloat)) {
      const isColdBackground = isIceTemperature(temperature, unit)
      setcurrentBackground(isColdBackground ? coldBackground : hotBackground)
    }
  }, [temperature, unit] )



  const getrConvertedTemperature = () => {
    const valueAsFloat = Number.parseFloat(temperature);
    console.log(valueAsFloat)
    return isNaN(valueAsFloat) ? "" : convertTemperature(oppositeUnit, valueAsFloat).toFixed(1);
  }

  return (
            <ImageBackground
              style={s.mainContainer}         
              source={currentBackground}
              resizeMode="cover"
              >
                <View style={s.container}>

                  <View>
                    <Temperature
                      value={getrConvertedTemperature()}
                      unit={oppositeUnit}
                    />
                  </View>
                  
                  <View>
                    <Input
                      defaultValue={"12"}
                      onChangeText={setTemperature}
                      unit={unit}
                    />
                  </View>

                  <View style={s.blocButton}>
                    <Button
                      onPress={() => setUnit(oppositeUnit)}
                      unit={unit}

                    />
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
  },
  blocButton: {
    alignItems: "center"
  }
});