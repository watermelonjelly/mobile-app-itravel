import React from 'react';
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppColors from '../config/AppColors';
import AppIcon from '../components/AppIcon';
import AppListItem from '../components/AppListItem';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';

function HomeScreen({navigation, route}) {
    //console.log(route.params);
    const handleClick = () => Alert.alert("Alert","Do you want to leave?",
      [{text:"Yes", onPress:()=>navigation.navigate("Welcome")},
       {text:"No", onPress:()=>console.log("cancel"),style:"cancel"}

      ])

    

    return (
        <AppScreen style={styles.container}>
            
                <TouchableOpacity style={styles.logout} onPress={handleClick}>
                <MaterialCommunityIcons
                        name="account-arrow-right-outline"
                        size={35}
                        color={AppColors.primaryColor}/>
                </TouchableOpacity>
                <View style={styles.welcomeContainer}>
                    <MaterialCommunityIcons
                        name="airballoon"
                        size={60}
                        color={AppColors.primaryColor}/>
                    <AppText style={styles.appName}>iTravel</AppText>
                </View>
                <View style={styles.profileContainer}>
                    <AppListItem image={route.params.paramImage} title={route.params.paramName} subtitle={route.params.paramEmail}/>
                </View>
                <View style = {styles.midContainer}>
                    <TouchableOpacity style={styles.cate} onPress={()=>{navigation.navigate("Explore")}}>
                        <MaterialCommunityIcons
                        name="home-city-outline"
                        size={45}
                        color={AppColors.hardgreen}/>
                        <AppText style={styles.cateText}>Hotel</AppText>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cate} onPress={()=>{navigation.navigate("Explore")}}>
                        <MaterialCommunityIcons
                        name="palm-tree"
                        size={45}
                        color={AppColors.hardgreen}/>
                        <AppText style={styles.cateText}>Landmark</AppText>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cate} onPress={()=>{navigation.navigate("Explore")}}>
                        <MaterialCommunityIcons
                        name="food"
                        size={45}
                        color={AppColors.hardgreen}/>
                        <AppText style={styles.cateText}>Restaurant</AppText>
                    </TouchableOpacity>

                </View>
                <View style={styles.linksContainer}>
                    <AppListItem title="My List" IconComponent={<AppIcon name="star-circle" size={50} iconColor={AppColors.otherColor} backgroundColor={AppColors.primaryColor} /> } onPress ={()=> navigation.navigate("List")}  />
                    <AppListItem title="Find More" IconComponent={<AppIcon name="text-box-search" size={50} iconColor={AppColors.otherColor} backgroundColor={AppColors.primaryColor} /> } onPress ={()=> navigation.navigate("Explore") }/>
                </View>

        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:AppColors.otherColor,
        marginTop:0,
    },
    welcomeContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    logout:{
        alignItems:"flex-end",
        marginTop:10,
        marginRight:20,


    },
    profileContainer:{
        marginTop: 40,
        height: 90,
        backgroundColor:AppColors.otherColorLite,
        justifyContent:"center",
    },
    linksContainer:{
        marginVertical:50,
        backgroundColor:AppColors.otherColorLite,
        height:150,
        justifyContent:"space-around",
        paddingLeft: 10,
    },
    appName:{
        fontWeight:"bold",
        fontStyle:"italic",
        color:AppColors.primaryColor,
    },
    midContainer:{
        marginTop:35,
        backgroundColor:AppColors.otherColor,
        flexDirection: "row",
        justifyContent:"space-around",
        alignContent:"center",
        alignItems:"center",
        alignSelf:"center",
    },
    cate:{
        //backgroundColor:"white",
        marginHorizontal:18,
        alignContent:"center",
        justifyContent:"space-around",
        alignItems:"center",
        alignSelf:"center",
    },
    cateText:{
        fontSize:20,
        color:AppColors.hardgreen,
        fontWeight:"bold",

    }
})
export default HomeScreen;
