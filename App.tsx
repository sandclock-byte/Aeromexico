import React from 'react'
import { AeroMexicoApp } from './AeroMexicoApp'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { store } from './src/view-model/store'

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AeroMexicoApp />
      </NavigationContainer>
    </Provider>
  )
}