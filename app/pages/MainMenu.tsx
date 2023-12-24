import React from 'react'
import { SafeAreaView } from 'react-native'
import Swiper from '../components/Swiper'
import CarLabel from '../components/CarLabel'
import BottomCarInfo from '../components/MainPage/BottomCarInfo'

function MainMenu() {
  return (
    <SafeAreaView style={{justifyContent:"center",alignItems:"center"}}>
        <CarLabel/>
        <BottomCarInfo/>
    </SafeAreaView>
  )
}

export default MainMenu