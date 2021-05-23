import React from 'react';
import {View, StyleSheet, ImageBackground, Platform} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';


import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppColors from '../config/AppColors';
import AppButton from '../components/AppButton';
import { TouchableOpacity } from 'react-native-gesture-handler';

const blurRadiusValue = Platform.OS === 'android'? 0.5 : 0.5;

function WelcomeScreen({navigation}) {
    return (
        <AppScreen>
            <ImageBackground 
                source={require("../assets/Background-Image.jpeg")}
                style={styles.background}
                blurRadius={blurRadiusValue}>
                
                <View style={styles.welcomeContainer}>
                    <MaterialCommunityIcons
                        name="airballoon"
                        size={60}
                        color={AppColors.primaryColor}/>
                    <AppText style={styles.appName}>iTravel</AppText>
                    <AppText style= {styles.slogan}>Explore | Navigate | Enjoy</AppText>
                </View>


                <View style={styles.buttonsContainer}>
                    <AppButton title="Log in" onPress={ () => navigation.navigate("Login")}/>
                    <AppButton title="Register" color="rgba(255,0,0,0.5)" onPress={ () => navigation.navigate("Register")}/>
                </View>
            </ImageBackground>
        </AppScreen>

    );
}


const styles = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor:"#425C5A",
        marginTop:0,
        
    },
    welcomeContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    }, 
    buttonsContainer:{
        
        marginTop: 400,
        
        flexDirection:'column',
        justifyContent: 'space-evenly',
        //alignItems:"center",
        height: 150,
        alignSelf: 'center',
        width: "80%",
        
    },
    appName:{
        fontWeight:"bold",
        fontStyle:"italic",
        color:AppColors.primaryColor,
    },
    slogan:{
        marginTop:15,
        //color:"#AD7C62",
        color:"#96684f",
        fontWeight:"bold",
    }

    
    
})
export default WelcomeScreen;