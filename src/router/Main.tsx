import { View, Text } from 'react-native'
import React from 'react'
import DrawerNavigation from './DrawerNavigation'
import { NavigationContainer } from '@react-navigation/native'


const Main = () => {
  return (
   <>
   <NavigationContainer>
   <DrawerNavigation/>
   </NavigationContainer>
   </>
  )
}

export default Main