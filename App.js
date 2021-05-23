import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './app/screens/HomeScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

import {NavigationContainer} from "@react-navigation/native";
import AuthNavigator from './app/navigation/AuthNavigator';
import TabNavigator from './app/navigation/TabNavigator';



export default function App() {
  return (

    <NavigationContainer>
        <AuthNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
  
});
