import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { euclideans } from "../utils/euclideans";
const MiniGame1 = ({navigation, route}) =>{
    const { listIndex } = route.params;
    const [index, setIndex] = useState(Math.floor(Math.random() * euclideans.length))

    useEffect(() =>{
        if(listIndex.length>3){
            listIndex.pop()
        }
    })
    console.log("list",listIndex)
    return(
        <View style={styles.container}>
            <View style={{width:'100%',height:'70%', paddingTop:10, flexDirection:'row' ,justifyContent:'center'}}>
                <Image style={styles.img} source={euclideans[index].url}/> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    img:{
        width:'50%',
        height:'100%'
    }
})

export default MiniGame1;