import React from "react";
import {View,Text,FlatList} from 'react-native'
import styles from './Details.style'
import DetailsCard from '../../components/detailsCard/DetailsCard'
import useFetch from '../../hooks/UseFetch'
import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";
export default function Details({route}){
    
    const url ="https://www.themealdb.com/api/json/v1/1/lookup.php?i="
    const {item} =route.params
    const mealsId =item.idMeal
    

    const {loading,data,error} =useFetch(url+mealsId)
    const mealsData =data.meals
    
    if (loading) {
        return <Loading />;
      }
      
      if (error) {
        return <Error />;
      }
      

      const renderMealsData =({item}) => <DetailsCard meals={item} />
    
    // eğer bir componente obje göndericeksen objeyi parcalayarak göndermen gerek mealsdata =data.meals diyerek parcalayıpp gönderebilirsin
    return(
        <View style ={styles.container}> 
            <FlatList
            data ={mealsData}
            renderItem ={renderMealsData}
            />
            
        </View>
    )
}