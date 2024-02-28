import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const Exercise = ({uri}) => {
  return (
    <TouchableOpacity style={styles.container}>
        <View style={{flex: 1,}}>
            <Image style={{height: 0.1*height, width: 0.3*width, borderRadius: 10, borderWidth: 1}} source={require('../assets/exercises/Back_exercises/back_exercises.png')} />
        </View>
        <View style={{flex: 1,}}>
            <Text style={{ textAlign: "center", fontWeight: 600, fontSize: 16, }}>Bent-over Dumbbell</Text>
            <Text style={{ textAlign: "center", fontWeight: 400, fontSize: 13 }}>5 min</Text>
        </View>
    </TouchableOpacity>
    
  )
}

export default Exercise

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        // borderWidth: 1,
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: 0.02*height,
        width: width,
        marginHorizontal: 0.03*width,
    }
})