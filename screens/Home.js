import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import Hero from '../components/Hero'
import Recommended from '../components/Recommended'
import TopBar from '../components/TopBar'
import Training from '../components/Training'
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Home = () => {
  return (
      <View style={styles.container}>
        <TopBar name={"Welcome"} />
        <View style={{width: width, padding: 0.05*width}}>
            <Text style={{fontWeight: 700, fontSize: 20}}>Hey! Piyush</Text>
        </View>
        <Hero />
        <Training />
        <Recommended />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        // height: '100vh',
    },
})