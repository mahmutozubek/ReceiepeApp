import React from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./Categories.style";
import CategoriesCard from "../../components/categoriesCard/CategoriesCard";
import useFetch from "../../hooks/UseFetch";
import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";
export default function Categories({ route, navigation }) {
  const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
  //route ile gelen parametreden hangi categoryi çekeceğimizi belirlemek icin categoryName i çektik

  const { item } = route.params;
  const categoryName = item.strCategory;

  const { data, loading, error } = useFetch(url + categoryName);

  const handleDetailSelected  =item =>{
    navigation.navigate('DetailsScreen',{item})
  }

  const renderDataMeals = ({ item }) => (
    <CategoriesCard meals={item} onSelect={() => handleDetailSelected(item)} />
  );

  if (error) return <Error />;

  if (loading) return <Loading />;
    
  return (
    <View style={styles.container}>
      <FlatList data={data.meals} renderItem={renderDataMeals} />
    </View>
  );
}
