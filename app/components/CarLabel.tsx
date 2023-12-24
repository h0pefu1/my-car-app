import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function CarLabel() {
    return (
        <View style={styles.carLabel}>
            <View style={styles.innerBetween}>
                <View style={styles.alignContentCenter}>
                    <Text style={{ color: "black" }}>
                        BMW E36
                    </Text>
                </View>
                <View>
                    <Image
                      style={{width: 200, height: 100}}
                        width={10}
                        height={10}
                        source={require('../tests/constants/images/e36.png')}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    carLabel: {
        borderRadius: 20,
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "white",
        padding: 25
    },
    innerBetween: {
        justifyContent: "space-between",
        flexDirection: "row",
        gap:20,
    },
    alignContentCenter:{
        justifyContent:"center",
        
    }
})
