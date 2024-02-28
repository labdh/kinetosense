import React, { Component, useState } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import TopBar from '../components/TopBar'
import Recommended from '../components/Recommended'
import Exercise from '../components/Exercise';

const ExcerciseList = () => {
    const [data, setData] = useState([{ "id": 1, "uri": "sdfksf" }, { "id": 2, "uri": "sdfksf" }, { "id": 3, "uri": "sdfksf" }, { "id": 4, "uri": "sdfksf" }, { "id": 5, "uri": "sdfksf" }, { "id": 6, "uri": "sdfksf" }, { "id": 7, "uri": "sdfksf" }]);
    return (
        <View style={styles.container}>
            <TopBar name={"Back Exercises"} show={false} />
            <FlatList data={data} renderItem={Exercise} keyExtractor={item => item.id} />
        </View>
    )
}

export default ExcerciseList

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        marginBottom: 40,
    },
})
