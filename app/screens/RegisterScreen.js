import React, {useState} from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';


import AppButton from '../components/AppButton';
import AppColors from '../config/AppColors';
import AppScreen from '../components/AppScreen';
import AppTextInput from '../components/AppTextInput';
import LoginScreen from './LoginScreen';
import AppText from '../components/AppText';
import DataManager from '../config/DataManager';






function RegisterScreen({navigation}) { 
    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const[nameError, setNameError] = useState("");
    const[emailError, setEmailError] = useState("");
    const[passwordError, setPasswordError] = useState("");
    
    const doErrorCheck =() =>{
        let formValid = true;
        
        if(!(userName) || !(userName.length>0) ){
            formValid = false;
            setNameError("Please set a valid Name");
        };
        if(!(/(.+)@(.+){2,}\.(.+){2,}/.test(email))){
            formValid = false;
            setEmailError("Please set a valid email address");
        };
        if(!(password) || !((password.length>3)&&(password.length<9))){
            formValid = false;
            setPasswordError("Please set a valid password with length of 4-8");
        };
        return formValid;

    
    
        // setNameError(userName.length>0 ? "":"Please set a valid Name");
        // setEmailError(/(.+)@(.+){2,}\.(.+){2,}/.test(email) ? "":"Please set a valid email");
        // setPasswordError((password.length>3)&&(password.length<9)? "":"Please set a valid password with length of 4-8");
    
        // return ((userName.length>0)&&(/(.+)@(.+){2,}\.(.+){2,}/.test(email))&& (password.length>3)&&(password.length<9)? true:false)
    }

   


    const addUser = () =>{
        let commonData = DataManager.getInstance();


        const users = commonData.users;
        const userID = users.length + 1;

        
        const newUser = {
            id: userID,
            name: userName,
            email: email,
            password:password,
            image: null,
        };
        console.log(newUser);
        commonData.addUser(newUser);
        console.log(commonData);

    };
    

      return (
        <AppScreen style={styles.container}>
                <View style={styles.welcomeContainer}>
                    <MaterialCommunityIcons
                        name="airballoon" 
                        size={60}
                        color={AppColors.primaryColor}/>
                        <AppText style={styles.appName}>iTravel</AppText>
                </View>
                <View style={styles.textInputContainer}>
                    <AppText>Please create your account</AppText>
                    <AppTextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="account"
                        placeholder="Full Name"
                        textContentType="emailAddress"
                        onChangeText = { userInputName => setUserName(userInputName)}
                        /> 
                        <AppText style = {{margin:5, color:"red",fontSize:16}}>{nameError}</AppText>
                    <AppTextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="email"
                        placeholder="Email Address : * @ *"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        onChangeText = { userInputEmail => setEmail(userInputEmail)}
                        />
                        <AppText style = {{margin:5, color:"red",fontSize:16}}>{emailError}</AppText>
                    <AppTextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        placeholder="Password : length 4-8"
                        secureTextEntry
                        textContentType="password"
                        onChangeText = {userInputPassword => setPassword(userInputPassword)}
                        />
                        <AppText style = {{margin:5, color:"red",fontSize:16}}>{passwordError}</AppText>
                </View> 
                <AppButton title="Sign Up" onPress={() => { 
                    if(doErrorCheck()){
                         console.log(userName, email,password); 
                         addUser();
                         navigation.navigate("Welcome");} 
                    }
                }/>
        </AppScreen>
    );
}





const styles = StyleSheet.create({
    container:{
        backgroundColor:AppColors.otherColor,
        flex:1,
        marginTop:0,
    },
    welcomeContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    }, 
    textInputContainer:{
        marginTop:20,

    },
    appName:{
        fontWeight:"bold",
        fontStyle:"italic",
        color:AppColors.primaryColor,
    },

})

export default RegisterScreen;