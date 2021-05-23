import React, { useState } from 'react';
import { TouchableOpacity,StyleSheet,Image} from 'react-native';

import AppColors from '../config/AppColors';
import AppPicker from '../components/AppPicker';
import AppScreen from '../components/AppScreen';
import * as ImagePicker from 'expo-image-picker';
import DataManager from '../config/DataManager';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import AppIcon from '../components/AppIcon';


const categories = [
    {label: "Hotel", value:1, icon:"home-city-outline", backgroundColor:"#96684f"},
    {label: "Landmark", value:2, icon:"palm-tree", backgroundColor:"#55754F"},
    {label: "Restaurant", value:3,icon:"food", backgroundColor:"#64b4a6"},
    {label: "Attraction", value:4,icon:"eye", backgroundColor:"#f8b654"},
    {label: "Activity", value:5,icon:"swim", backgroundColor:"#b5a47d"},
    {label: "Ticket", value:6,icon:"ticket-percent-outline", backgroundColor:"#f8b0a0"},
];


function NewListScreen({navigation}) {
    const[title, setTitle] = useState("");
    const[subTitle, setSubTitle] = useState("");
    const[category, setCategory] = useState("");
    const[image, setImage] = useState(null);

    const[titleError, setTitleError] = useState("");
    const[subTitleError, setSubTitleError] = useState("");
    const[categoryError, setCategoryError] = useState("");
    const[imageError, setImageError] = useState("");


    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        
        if(permissionResult.granted === false) {
            alert( "Permission to access camera roll is required!");
            return;

        }
        

        let pickerResult = await ImagePicker.launchImageLibraryAsync();

        if (pickerResult.cancelled === true) {
            return;
        }
        setImage({path: pickerResult.uri});
        console.log(pickerResult);
    }

    const doErrorCheck =() =>{
        //console.log(title,subTitle,category.label);
        setTitleError(title.length>0 ? "":"Please enter a place");
        setSubTitleError(subTitle.length>0 ? "":"Please enter City and Country");
        setCategoryError(category ? "":"Please choose a category from the list");
        setImageError(image? "": " Please pick an image");
        return ((title.length>0)&&(subTitle.length>0)&& (category) && (image)? true:false)

    }
    const addBook = () =>{
        let commonData = DataManager.getInstance();
        let user = commonData.getUserID();
        
        const books = commonData.getBooks(user);
        const bookID = books.length+1;
        const newBook = {
            title: title,
            subtitle: subTitle,
            category:category.label,
            bookid: bookID,
            userid: user,
            image: image.path,

        };

        console.log(newBook);
        commonData.addBook(newBook);
    }


    return (
        <AppScreen style={{backgroundColor:AppColors.otherColor}}>
            <AppText>Create a new item here</AppText>
            <AppTextInput
                icon ="hexagram-outline"
                placeholder ="Place"
                value ={title}
                onChangeText = {(inputText) => setTitle(inputText)}
            />
            {titleError.length>0 ?<AppText style = {{margin:5, color:"red",fontSize:16}}>{titleError}</AppText>:<></>}

            <AppTextInput
                icon ="map-marker"
                placeholder ="City, Country"
                value ={subTitle}
                onChangeText = {(inputText) => setSubTitle(inputText)}
            />
            {subTitleError.length>0 ?<AppText style = {{margin:5, color:"red",fontSize:16}}>{subTitleError}</AppText>:<></>}



            <AppPicker 
                selectedItem={category}
                onSelectItem = {item => setCategory(item)}
                data={categories} 
                icon="apps" 
                placeholder="Choose Categories" 
                numColumns={3}/>
                
            {categoryError.length>0 ?<AppText style = {{margin:5, color:"red",fontSize:16}}>{categoryError}</AppText>:<></>} 


            <TouchableOpacity style = {styles.imageButton} onPress={openImagePickerAsync}>
                <AppIcon name="camera" size={65} iconColor={AppColors.otherColor} backgroundColor ={ AppColors.primaryColor}/>
                {image && <Image source={{uri:image.path}} style ={{height:80,width:120,marginLeft:0}}/>}
            </TouchableOpacity>

            {imageError.length>0 ?<AppText style = {{margin:5, color:"red",fontSize:16}}>{imageError}</AppText>:<></>} 

            <AppButton title ='Add To My List' onPress = {() =>{
                //console.log(title, subTitle, category.label);
                if(doErrorCheck()){
                    addBook();
                    setTitle("");
                    setSubTitle("");
                    setCategory("");
                    setImage(null);
                    navigation.navigate('Home');
                }
              }
            }/>
        
        
        
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    imageButton:{
        justifyContent:"space-around",
        alignItems:"center",
        flexDirection:"row",
        marginBottom:50,

    }
})

export default NewListScreen;