import { useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Orientation from "react-native-orientation-locker";

const LandingPage = ({navigation}) =>{
    useEffect(() => {
        Orientation.lockToLandscape();
        return () => {
            Orientation.unlockAllOrientations(); 
        };
    }, []);

    return(
        <View style={styles.bigContainer}>
            <View style={styles.row}>

                <View  style={styles.columnXCenter}>
                    <TouchableOpacity style={styles.sqare} 
                        onPress={() =>navigation.navigate("intruction",
                            {
                                text: "You will be shown 3 different shaded shapes, one at a time. Do your best to remember each entire shape.",
                                url: "demo1"
                            }) 
                        }
                    >
                    <Image source={require('../../assets/images/game1.jpeg')} style={styles.img}/>
                    </TouchableOpacity>
                    <Text style={styles.text}>
                        Visual Object Learning Task
                    </Text>
                </View>

                <View style={styles.columnXCenter}>
                    <TouchableOpacity style={styles.sqare} 
                        onPress={() =>navigation.navigate("intruction",
                            {
                                text: "Choose the pair of shapes that best fits with the single shape.",
                                url: "game2"
                            }) 
                        }
                    >
                    <Image source={require('../../assets/images/game2.jpeg')} style={styles.img}/>
                    </TouchableOpacity>
                    <Text style={styles.text}>
                        Abstract Matching
                    </Text>
                </View>      
            </View>

            <View style={styles.row}>
                <View style={styles.columnXCenter}>
                    <TouchableOpacity style={styles.sqare} 
                        onPress={() =>navigation.navigate("intruction",
                            {
                                text: "Tap the number that matches the symbol in the box.",
                                url: "game3"
                            }) 
                        }
                    >
                    <Image source={require('../../assets/images/game3.jpeg')} style={styles.img}/>
                    </TouchableOpacity>
                    <Text style={styles.text} >
                    Digital Symbol Substitution Task
                    </Text>
                </View>

                <View style={styles.columnXCenter}>
                    <TouchableOpacity style={styles.sqare} 
                        onPress={() =>navigation.navigate("intruction",
                            {
                                text: "Tap the screen with two fingers when you see one dot. Do NOT tap the screen when you see two dots. Use left hand.",
                                url: "game4"
                            }) 
                        }
                    >
                    <Image source={require('../../assets/images/game4.jpeg')} style={styles.img}/>
                    </TouchableOpacity>
                    <Text style={styles.text}>
                        Go No Go Test
                    </Text>
                </View>      
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    bigContainer:{
        flex:1,
        paddingVertical:'2%',
        paddingHorizontal:'10%',
        flexDirection:'column',
        justifyContent:'space-between',
        backgroundColor:'white',
    },
    row:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    columnXCenter:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    sqare:{
        height:100,
        width:100,
        backgroundColor:'blue',
    },
    text:{
        fontSize:18,
        marginTop:2
    },
    img:{
        height:'100%',
        width:'100%'
    }
})

export default LandingPage;