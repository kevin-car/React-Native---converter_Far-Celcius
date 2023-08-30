import { UNITS } from "../constante";

export const getOppositUnit = (unit) => {
    return unit === UNITS.celcius ? UNITS.faranheit : UNITS.celcius
} 

export const convertTemperature = (unit, value) => {
    if(unit === UNITS.celcius) {
        return (value - 32 ) / 1.8
    } else {
        return value * 1.8 + 32 
    }
}

export const isIceTemperature = (value, unit) => {
    if(unit === UNITS.celcius) {
        return value <= 0
   } else {
    return value <= 32
   }
}