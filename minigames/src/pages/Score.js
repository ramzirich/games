import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from 'react';

const Score = ({navigation, score}) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Your Score is</Text>
            <Text style={[styles.text, {color:'blue'}]}>{score}</Text>
            <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate("landing")}>
                <Text style={styles.buttonText}>Home Page</Text>
            </TouchableOpacity>
        </View>
        
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingTop:'10%',
        flexDirection:'column',
        alignItems :'center'
    },
    text:{
        fontSize:34,
        alignItems:'center'
    },
    button:{
        marginTop: 25,
        height:100,
        width:200,
        backgroundColor:'blue',
        flexDirection:"row",
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        fontSize:20,
        color:'white'
    }
})

export default Score;