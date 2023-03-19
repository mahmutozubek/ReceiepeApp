import React from "react";

import { TouchableOpacity, } from "react-native";

import { View, Text, Image } from "react-native";
import styles from "./CategoriesCard.styles";
export default function CategoriesCard({ meals,onSelect }) {
  return (
    <TouchableOpacity style={styles.container} onPress ={onSelect}>
      <Image style={styles.image} source={{ uri: meals.strMealThumb }} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{meals.strMeal}</Text>
      </View>
    </TouchableOpacity>
  );
}
