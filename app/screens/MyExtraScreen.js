import React, {useState} from 'react';
import { StyleSheet, FlatList, View, TouchableOpacity } from 'react-native';

import AppScreen from '../components/AppScreen';
import AppColors from '../config/AppColors';
import AppListItem from '../components/AppListItem';
import AppIcon from '../components/AppIcon';


const initialAuthorList = [
    {
        id:1,
        name:"Jonah's Restaurant",
        location: "Whale Beach, NSW, Australia",
        image: require("../assets/food1.webp"),
    },
    {
        id:2,
        name:"Koomo - Crown Plaza",
        location: "Adelaide, SA, Australia",
        image: require("../assets/food2.webp"),
    },
    {   id:3,
        name:"Nu Nu - Alamanda",
        location: "Palm Cove,QLD,Australia",
        image: require("../assets/food3.webp"),
    },
    {   id:4,
        name:"Hearth Restaurant",
        location: "Perth,WA,Australia",
        image: require("../assets/food4.jpg"),
    },
    {   id:5,
        name:"Doot Doot Doot",
        location: "Peninsula,VIC,Australia",
        image: require("../assets/food5.webp"),
    },

    

]



function MyExtraScreen(props) {

    const[refreshing, setRefreshing] = useState(false);
    const[authors, setAuthors] =  useState(initialAuthorList);

    const handleDelete = (author) => {
        const newAuthorList =  authors.filter (item => item.id !== author.id);
        setAuthors(newAuthorList);
    }

    return (
        <AppScreen style={styles.container}>
            <FlatList
            data = {authors}
            keyExtractor = { author => author.id.toString()}
            refreshing={refreshing}
            onRefresh={() => setAuthors(initialAuthorList)}
            renderItem = {({item}) => 
                <AppListItem 
                    title={item.name}
                    subtitle= {item.location}
                    image={item.image}
                    onPress={() => console.log(item)}
                    onSwipeLeft={ () => (
                    <View style={styles.deleteView}>
                        <TouchableOpacity onPress={() => handleDelete(item)}>
                            <AppIcon name="trash-can" iconColor={AppColors.otherColor} backgroundColor={AppColors.primaryColor}/> 
                        </TouchableOpacity>
                    </View>)}
    
                />}
            ItemSeparatorComponent = { () =>
                <View style={styles.seperator}/>
            }
            />
        </AppScreen>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:AppColors.otherColor,
        flex:1,
        marginTop: 0,
    },
        
    seperator:{
        width:"100%",
        height:2,
        backgroundColor: AppColors.primaryColor,
    },
    deleteView:{
        backgroundColor:AppColors.secondaryColor,
        width:75,
        justifyContent:"center",
        alignItems:"center",
    }
})

export default MyExtraScreen;