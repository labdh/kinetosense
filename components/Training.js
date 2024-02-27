import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Training = () => {
    return (
        <View style={styles.container}>
            <View style={{paddingHorizontal: width*0.05, paddingVertical: height*0.03}}>
                <Text style={{fontWeight: 700, fontSize: 20}}>Training</Text>
            </View>
            <View style={{flexDirection: "row", justifyContent:"space-around"}}>
                <TouchableOpacity>
                    {/* <Image source={require("../assets/photo_name.extension")} /> */}
                    <Text style={{fontWeight: 500, fontSize: 13}}>Shoulders</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    {/* <Image source={require("../assets/photo_name.extension")} /> */}
                    <Text style={{fontWeight: 500, fontSize: 13}}>Shoulders</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    {/* <Image source={require("../assets/photo_name.extension")} /> */}
                    <Text style={{fontWeight: 500, fontSize: 13}}>Shoulders</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Training

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'center',
        width: width,
    },
})