import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const AppTab = createBottomTabNavigator();

import HomeScreen from '../screens/HomeScreen';
import MyTravelScreen from '../screens/MyTravelScreen';
import NewListScreen from '../screens/NewListScreen';
import AppColors from '../config/AppColors';
import AppIcon from '../components/AppIcon';

import HomeNavigator from './HomeNavigator';


const TabNavigator = () => (
    <AppTab.Navigator tabBarOptions={{activeTintColor:AppColors.otherColor, activeBackgroundColor:AppColors.primaryColor}}>
        <AppTab.Screen name="Home" component={HomeNavigator} options={{tabBarIcon: () => <AppIcon size={30} name="home" backgroundColor={AppColors.otherColor}/>}}/>
        <AppTab.Screen name="Add New" component={NewListScreen} options={{tabBarIcon: () => <AppIcon size={30} name="plus-circle" backgroundColor={AppColors.otherColor}/>}}/>
        {/* <AppTab.Screen name="My List" component={MyTravelScreen} options={{tabBarIcon: () => <AppIcon size={30} name="star-circle" backgroundColor={AppColors.otherColor}/>}}/> */}
    </AppTab.Navigator>
)

export default TabNavigator; 