import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import AppColors from '../config/AppColors';
import AppText from './AppText';



function AppListItem({image, title, subtitle, IconComponent, onPress, onSwipeLeft}) {
    return (
        <Swipeable renderRightActions={onSwipeLeft}>
            <TouchableHighlight onPress={onPress} underlayColor={AppColors.otherColorLite}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image source={image} style={styles.image}/>}
                    <View style={styles.textContainer}>
                        <AppText style={styles.title}> {title} </AppText>
                        {subtitle && <AppText style={styles.subtitle}> {subtitle} </AppText>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        padding:10,
    },
    image:{
        height: 90,
        width: 135,
        borderRadius: 15,
        marginLeft: 10,
    },
    textContainer:{
        flexDirection:"column",
        marginLeft: 20,
    },
    title:{
        fontWeight:"bold",
        marginVertical: 5,
    },
    subtitle:{
        fontSize:15,
    }
    
})

export default AppListItem;