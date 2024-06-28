import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator, DrawerScreenProps } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AddNewCar from './AddNewCar';

export type CarProps = {
  name: string;
}

type DrawerNavigationType = {
  [key: string]: CarProps;
};

type CarBottomNavigationProps = DrawerScreenProps<DrawerNavigationType, keyof DrawerNavigationType>;

const CarBottomNavigation: React.FC<CarBottomNavigationProps> = ({ route, navigation }) => {
  return (
    <View>
      <Text>BottomNavigation</Text>
      <Text>Car Name: {route.params.name}</Text>
    </View>
  )
}

const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator<DrawerNavigationType>();
  const cars = [{
    name: "BMW E36",
  }, {
    name: "BMW 430I",
  }, {
    name: "Renault Kadjar",
  }];

  const initialRoute = cars.length > 0 ? `CarBottomNavigation_${cars[0].name.replace(/ /g, "_")}` : "AnotherRoute";

  return (
    <Drawer.Navigator initialRouteName={initialRoute}>
      {
        (cars && cars.length > 0) &&
        cars.map((car, index) => (
          <Drawer.Screen
            key={index}
            name={`CarBottomNavigation_${car.name.replace(/ /g, "_")}`}
            component={CarBottomNavigation}
            initialParams={car}
            options={{ title: car.name }}
          />
        ))
      }
      <Drawer.Screen
        name="AddNewCar"
        component={AddNewCar}
      />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation;
