import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Swiper({text}:any) {
  return (
    <View style={styles.outer}>
        <Text style={{color:"black"}}>
            {text}
        </Text>
    </View>
  )
}
const styles = StyleSheet.create({
    outer: {
        borderRadius: 20,
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "white",
        padding: 25
    },
    
})

