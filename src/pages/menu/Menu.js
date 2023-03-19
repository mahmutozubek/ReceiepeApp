import axios from "axios";
import React from "react";
import {View,Button,Text,FlatList} from 'react-native'
import MenuCard from "../../components/menuCard/MenuCard";
import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";
import Data from '../../../data.json'
import useFetch from "../../hooks/UseFetch";

const url ="https://www.themealdb.com/api/json/v1/1/categories.php"

export default function Menu({navigation}){
   
    const {data,loading,error} =useFetch(url)

    
    const handleMealSelected  =item  =>{
        navigation.navigate('CategoriesScreen',{item})
      }

    if(error) return <Error/>

    if(loading)  return <Loading />
    
   
     
      
    const renderList =({item}) => <MenuCard menu={item} onSelect={() =>handleMealSelected(item)}/>

    return(
        <View style ={{backgroundColor:'orange'}}>
            <FlatList
            data ={data.categories}
            renderItem ={renderList}
            />
        </View>

    )
   
}