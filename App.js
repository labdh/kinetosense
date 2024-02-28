import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Exercise from './screens/ExcerciseList';
import ExerciseDetail from './screens/ExerciseDetails';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import StackNav from './StackNavigation';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Feed" screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarLabel: '',
        tabBarIcon: () => (
          <View style={{borderRadius: 30, padding: 4, backgroundColor: 'rgba(255,165,0,0.4)' }}>
            <Entypo name="home" size={24} color="black" />
          </View>
        ),
      }} />
      <Tab.Screen name="Exercise" component={Exercise} options={{
        tabBarLabel: '',
        tabBarIcon: () => (
          <View style={{borderRadius: 30, padding: 4, backgroundColor: 'rgba(255,165,0,0.4)' }}>
            <Ionicons name="bag-sharp" size={24} color="black" />
          </View>
        ),
      }} />
      <Tab.Screen name="ExerciseDetail" component={ExerciseDetail} options={{        
        tabBarLabel: '',
        tabBarIcon: () => (
          <View style={{borderRadius: 30, padding: 4, backgroundColor: 'rgba(255,165,0,0.4)' }}>
            <Ionicons name="bag-sharp" size={24} color="black" />
          </View>
        ),
      }} />
      <Tab.Screen name="Settings1" component={SettingsScreen} options={{
        tabBarLabel: '',
        tabBarIcon: () => (
          <View style={{borderRadius: 30, padding: 4, backgroundColor: 'rgba(255,165,0,0.4)' }}>
            <Ionicons name="bag-sharp" size={24} color="black" />
          </View>
        ),
      }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      {/* <StackNav /> */}
      <MyTabs />
    </NavigationContainer>
  );
}
