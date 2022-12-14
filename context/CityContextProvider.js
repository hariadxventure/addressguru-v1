import { View, Text } from 'react-native'
import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

export const CityContext = createContext({})

const CityContextProvider = ({children}) => {
  const [city, setCity] = useState("Dehradun")
  return (
    <CityContext.Provider value={{city , setCity}}>
      {children}
    </CityContext.Provider>
  )
}

export default CityContextProvider