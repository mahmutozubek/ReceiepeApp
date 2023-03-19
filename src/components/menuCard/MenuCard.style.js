import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
      backgroundColor:'#e0e0e0',
      borderTopLeftRadius:50,
      borderBottomLeftRadius:50,
        alignItems: "center",
        padding: 5,
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        flexDirection:'row'
      },
      image: {
        resizeMode:'cover',
        backgroundColor:'#e0e0e0',
        marginLeft:10,
        borderRadius:40,
        width: 80,
        height: 80,
      },
      title:{
        fontSize:19,
        fontWeight:'bold',
        marginLeft :10,
      },
})