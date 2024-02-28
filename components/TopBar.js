import { StyleSheet, Text, SafeAreaView, Dimensions, View, Image } from 'react-native'
import React from 'react'
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TopBar = ({name, show}) => {
    return (
        <SafeAreaView style={styles.container}>
            <AntDesign name="arrowleft" size={24} color="black" />
            <View style={{  }}>
                <Text style={{fontWeight: 700, fontSize: 25, textAlign: 'center'}}>{name}</Text>
            </View>
            {show && <MaterialCommunityIcons name="bell-badge-outline" size={24} color="black" />}
            {!show && <View style={{}}><Image style={{height: 25, width: 25, borderRadius: 100 }} source={require('../assets/KinetoSense.png')} /></View>}
        </SafeAreaView>
    )
}

export default TopBar

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: '#FFA500',
        alignItems: 'center',
        justifyContent: 'space-around',
        // borderWidth: 1,
        width: width,
        height: 0.083 * height,
        marginTop: 36,
    },
})