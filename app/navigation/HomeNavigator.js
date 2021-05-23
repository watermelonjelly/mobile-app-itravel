import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';


import HomeScreen from '../screens/HomeScreen';
import MyTravelScreen from '../screens/MyTravelScreen';
import MyExtraScreen from '../screens/MyExtraScreen';



const AppStack =  createStackNavigator();


const AuthNavigator = () => (
    <AppStack.Navigator mode="modal">
        <AppStack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="List" component={MyTravelScreen}/>
        <AppStack.Screen name="Explore" component={MyExtraScreen}/>

    </AppStack.Navigator>
)

export default AuthNavigator;