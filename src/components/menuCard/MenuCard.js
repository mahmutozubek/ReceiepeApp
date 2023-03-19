import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles  from './MenuCard.style'
export default function MenuCard({ menu,onSelect }) {



  return (

    <TouchableOpacity style={styles.container} onPress={onSelect}>
      <Image style={styles.image} source={{ uri: menu.strCategoryThumb }} />
      <Text style={styles.title}>{menu.strCategory}</Text>
    </TouchableOpacity>
  );
}
