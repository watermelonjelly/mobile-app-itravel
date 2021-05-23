import React, {useState}from 'react';
import {RefreshControl, StyleSheet, View, TouchableOpacity, Modal } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import AppCard from '../components/AppCard';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import AppColors from '../config/AppColors';
import DataManager from '../config/DataManager';
import AppIcon from '../components/AppIcon';
import AppButton from '../components/AppButton';


// const getBooks =() => {
//     let commonData = DataManager.getInstance();
//     let user = commonData.getUserID();
//     return commonData.getBooks(user);
// }
// const wait = (timeout) => {
//     return new Promise(resolve => setTimeout(resolve, timeout));
// }

function MyTravelScreen(props) {

    const getBooks =() => {
        let commonData = DataManager.getInstance();
        let user = commonData.getUserID();
        return commonData.getBooks(user);
    }

    const bookList = getBooks();
    console.log(bookList);

    const[refreshing, setRefreshing] = useState(false);
    const[cardList, setBooks] =  useState(bookList);

    const[isModalVisible, setisModalVisible] =  useState(false);

    const[inputText, setinputText] =  useState();

    const[editItem,seteditItem] = useState();

    const [data,newData] = useState(bookList);


    const onPressItem =(item) =>{
        setisModalVisible(true);
        setinputText(item.title);
        seteditItem(item.bookid);
    }

    // const onRefresh = React.useCallback(() => {
    //     setRefreshing(true);
    //     wait(2000).then(() => setRefreshing(false));
    //   }, []);

    const handleDelete = (card) => {
        const newBookList =  cardList.filter (item => item.bookid !== card.bookid);
        setBooks(newBookList);
        console.log(newBookList);
        let commonData = DataManager.getInstance();
        commonData.books = commonData.books.filter(item => !(item.bookid == card.bookid && item.userid == card.userid));
    }

    const handleEditItem =(editItem) =>{
        const newData = bookList.map(item =>{
        if( item.bookid == editItem){
            item.title = inputText;
            return item;
        }
        return item;
    })
     setBooks(newData);
    }

    const onPressSaveEdit =() => {
        handleEditItem(editItem);
        setisModalVisible(false);
    }





    

    return (
        <AppScreen style={styles.container}>

            <FlatList
                data = {cardList}
                keyExtractor = {card => card.bookid.toString()}
                refreshing={refreshing}
                onRefresh={() => setBooks(bookList)}
                renderItem = {({item}) => 
                        <AppCard
                        title = {item.title}
                        subtitle = {item.subtitle}
                        image = {item.image}
                        category = {item.category}
                        // onPress={() => console.log(item)}
                        onSwipeLeft={ () => (
                        <View style={styles.deleteView}>
                            <TouchableOpacity onPress={() => handleDelete(item)}>
                               <AppIcon name="trash-can" iconColor={AppColors.otherColor} backgroundColor={AppColors.primaryColor}/> 
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => onPressItem(item)}>
                               <AppIcon name="lead-pencil" iconColor={AppColors.otherColor} backgroundColor={AppColors.primaryColor}/> 
                            </TouchableOpacity>
                        </View>)}
                        /> 
                }
                        
                            
            />
            <Modal 
                animationType='fade'
                visible={isModalVisible}
                onRequestClose={() => setisModalVisible(false)}>
            <View style= {styles.modalView}>
                <AppText>Change Title:</AppText>
                <AppTextInput
                onChangeText={(text) => setinputText(text)}
                defaultValue ={inputText}
                editable ={true}
                multiline={false}
                maxLength={200}

                />
                <TouchableOpacity onPress={()=>onPressSaveEdit()}>
                    <AppText style={{color:AppColors.secondaryColor}}>Save</AppText>
                </TouchableOpacity>
                </View>
            </Modal>

        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:AppColors.primaryColor,
        flex:1,
        marginTop:0,
    },
    deleteView:{
        backgroundColor:AppColors.secondaryColor,
        width:75,
        justifyContent:"space-evenly",
        alignItems:"center",
    },
    modalView:{
        backgroundColor:AppColors.otherColorLite,
        flex:1,
        alignItems:'center',
        justifyContent:'center',

    }
})

export default MyTravelScreen;