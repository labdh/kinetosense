import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Hero = () => {
  return (
    <View style={styles.container}>
        <View style={{flex: 1}}></View>
        <View style={{flex: 1}}>
            <Text style={{fontWeight: 700, fontSize: 20}}>Let's get fit together!</Text>
        </View>
    </View>
  )
}

export default Hero

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: '#FFA500',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        width: 0.8*width,
        height: 0.15*height,
    },
})