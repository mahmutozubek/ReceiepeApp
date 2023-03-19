import {View,Text,Image,TouchableOpacity,Linking} from 'react-native'
import styles from './DetailsCard.style'
import React from 'react'

export default function DetailsCard({meals}){
   
    const url =meals.strYoutube
    const onSelect =async () =>{
        const supported =await Linking.canOpenURL(url)
    
        if(supported){
            await Linking.openURL(url)
        }else{
            console.log("Can't open URL"+url)
        }
    }


    return(
        <View style ={styles.container}>
            <Image style ={styles.image} source ={{uri:meals.strMealThumb }}/>
            <Text style ={styles.name}>{meals.strMeal}</Text>
            <Text style ={styles.origin}>{meals.strArea}</Text>
            <View style ={styles.seperator}></View>
            <Text style ={styles.instructions}>{meals.strInstructions}</Text>
            <TouchableOpacity style ={styles.button} onPress={() =>onSelect(url)}>
                <Text style ={styles.textButton}>Watch on Youtube</Text>
            </TouchableOpacity>
        </View>
    )
}