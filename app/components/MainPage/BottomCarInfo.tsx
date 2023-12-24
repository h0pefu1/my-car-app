import React from 'react'
import Swiper from '../Swiper'
import { StyleSheet, View } from 'react-native'

function BottomCarInfo() {
  return (
    <View style={style.bottomInfo}>
    <Swiper text={"About 170k km"}/>
    <Swiper text={"About 10k km"}/>
    </View>

  )
}
export default BottomCarInfo
const style = StyleSheet.create({
    bottomInfo:{
        flexDirection:"row",
    }
})