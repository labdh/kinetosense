import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Exercise = ({uri}) => {
  return (
    <TouchableOpacity>
        <View>
            {/* <Image source={require("../assets/photo_name.extension")} /> */}
        </View>
        <View>
            <Text style={{ textAlign: "center", fontWeight: 600, fontSize: 16 }}>Bent-over Dumbbell rows</Text>
            <Text style={{ textAlign: "center", fontWeight: 400, fontSize: 13 }}>5 min</Text>
        </View>
    </TouchableOpacity>
  )
}

export default Exercise

const styles = StyleSheet.create({})