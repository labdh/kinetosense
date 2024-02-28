import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
// import Nunito from '../assets/fonts/Nunito-Italic-VariableFont_wght.ttf'
import * as Font from 'expo-font';

const Hero = () => {
    // const [fontLoaded, setFontLoaded] = useState(false);

    // useEffect(() => {
    //     async function loadFont() {
    //         await Font.loadAsync({
    //             'Nunito-Italic': require('../assets/fonts/Nunito-Italic-VariableFont_wght.ttf'),
    //         });
    //         setFontLoaded(true);
    //     }

    //     loadFont();
    // }, []);
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, }}>
                <Image style={{ height: 0.15 * height, width: 0.2 * width, borderRadius: 10, borderWidth: 1, marginLeft: -20, }} source={require('../assets/exercises/Back_exercises/back_exercises.png')} />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: 700, fontSize: 20, }}>Let's get fit together!</Text>
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
        width: 0.7 * width,
        height: 0.15 * height,
    },
})