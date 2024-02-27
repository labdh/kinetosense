import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import BottomNav from "./BottomNavigation"
import Home from "./screens/Home"
const Stack = createStackNavigator();

export default function StackNav() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Home"
        >
            <Stack.Screen name="Home" component={Home} />
            {/* <Stack.Screen name="BottomNavigation" component={BottomNav} /> */}
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});