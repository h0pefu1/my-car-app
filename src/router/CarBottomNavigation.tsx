import { View, Text } from 'react-native'
import React from 'react'
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import type { CarProps } from './DrawerNavigation';

type CarBottomNavigationProps = {
  route: RouteProp<{ params: CarProps }, 'params'>;
  navigation: StackNavigationProp<any>;
}

const CarBottomNavigation: React.FC<CarBottomNavigationProps> = ({ route, navigation }) => {
  return (
    <View>
      <Text>BottomNavigation</Text>
      <Text>Car Name: {route.params.name}</Text>
    </View>
  )
}

export default CarBottomNavigation;
