import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button,View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './src/pages/details/Details'
import Menu from './src/pages/menu/Menu'
import Categories from './src/pages/categories/Categories'

export default function App() {
  
  const Stack =createNativeStackNavigator()
 // BU DOSYA ROUTER.JS DOSYASIDIR
  return (
    //PROJEMİZDEKİ SAYFALARI TANIMLIYORUZ
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ="MenuScreen" component={Menu}  />
        <Stack.Screen name ="CategoriesScreen" component={Categories}/>
        <Stack.Screen name ="DetailsScreen" component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

