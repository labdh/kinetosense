import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import Exercise from './Exercise';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Recommended = () => {
    const [data, setData] = useState([{"id":1, "uri":"sdfksf"}]);
    const getPhotos = async () => {
        try {
            const response = await axios.get("api_end-point")
            const data = response.data;
            setData(data);
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        
    }, [])
    return (
        <View style={styles.container}>
            <View style={{paddingHorizontal: width*0.05, paddingVertical: height*0.03}}>
                <Text style={{ fontWeight: 700, fontSize: 20 }}>Recommended</Text>
            </View>
            <View style={{height: 0.46*height, width: width}}>
                <FlatList data={data} renderItem={Exercise} keyExtractor={item => item.id} />
            </View>
        </View>
    )
}

export default Recommended

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
})