import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import TopBar from '../components/TopBar';
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
import { Ionicons } from '@expo/vector-icons';
const ExerciseDetail = () => {
    return (
        <View style={styles.container}>
            <TopBar name={"Chest Exercises"} show={false} />
            <View style={{ alignItems: 'center', marginVertical: 0.01 * height, overflow: 'hidden', width: 0.9 * width, borderRadius: 10, borderWidth: 1 }}>
                <ImageBackground style={{ resizeMode: 'cover', width: 0.9 * width, borderRadius: 50 }} source={require('../assets/exercises/Back_exercises/back_exercises.png')}>
                    <View style={{ alignItems: 'center', height: 0.2 * height, width: 0.9 * width, backgroundColor: 'rgba(255,255,255,0.3)', textAlign: 'center', justifyContent: 'center', }}>
                        <Text style={{ fontSize: 30, fontWeight: 700 }}>Chest Exercise</Text>
                        {/* <Image style={{ height: 0.25 * height, width: 0.8 * width, borderRadius: 10, }} source={require('../assets/exercises/Back_exercises/back_exercises.png')} /> */}
                    </View>
                </ImageBackground>
            </View>
                <View style={{borderWidth: 1, marginVertical: 10}}>
                    <View style={styles.listItem}>
                        <Text style={styles.listItemNumber}>1.</Text>
                        <Text style={styles.listItemText}>First item</Text>
                    </View>
                    <View style={styles.listItem}>
                        <Text style={styles.listItemNumber}>2.</Text>
                        <Text style={styles.listItemText}>Second item</Text>
                    </View>
                    <View style={styles.listItem}>
                        <Text style={styles.listItemNumber}>3.</Text>
                        <Text style={styles.listItemText}>Third item</Text>
                    </View>
                </View>
            <TouchableOpacity style={{backgroundColor: '#10B52A', height: 0.05*height, justifyContent: 'center', alignItems: 'center', borderRadius: 10, flexDirection: 'row', paddingHorizontal: 0.03*width}}>
                <Ionicons name="play-outline" size={24} color="black" />
                <Text>Start</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ExerciseDetail

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 5, // Adjust this value for spacing between items
        // borderWidth: 1,
    },
    listItemNumber: {
        marginRight: 5,
        fontWeight: 'bold', // Make the number bold
    },
    listItemText: {
        // flex: 1, // Take up remaining space
    },
})