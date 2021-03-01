import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./Screen/Home";
import AddUser from "./Screen/AddUser";

const Stack = createStackNavigator();

 function App() {
  return (
    <Stack.Navigator>
      
      <Stack.Screen name="AddUser" component={AddUser} />
       <Stack.Screen name="Home" component={Home} /> 
    </Stack.Navigator>
  );
}

export default () => {
  return(
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
