import { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
                <View>
                    <TouchableOpacity style={styles.sqare} 
                        onPress={() =>navigation.navigate("intruction",
                            {
                                text: "You will be shown 3 different shaded shapes, one at a time. Do your best to remember each entire shape.",
                                url: "demo1"
                            }) 
                        }
                    >
                    </TouchableOpacity>
                    <Text style={styles.text}>
                        Mini Game 1
                    </Text>
                </View>

                <View>
                    <TouchableOpacity style={styles.sqare} 
                        onPress={() =>navigation.navigate("intruction",
                            {
                                text: "Choose the pair of shapes that best fits with the single shape.",
                                url: "game2"
                            }) 
                        }
                    >
                    </TouchableOpacity>
                    <Text style={styles.text}>
                        Mini Game 2
                    </Text>
                </View>      
            </View>

            <View style={styles.row}>
                <View>
                    <TouchableOpacity style={styles.sqare} 
                        onPress={() =>navigation.navigate("intruction",
                            {
                                text: "Tap the number that matches the symbol in the box.",
                                url: "game3"
                            }) 
                        }
                    >
                    </TouchableOpacity>
                    <Text style={styles.text} >
                        Mini Game 3
                    </Text>
                </View>

                <View>
                    <TouchableOpacity style={styles.sqare} 
                        onPress={() =>navigation.navigate("intruction",
                            {
                                text: "Tap the screen with two fingers when you see one dot. Do NOT tap the screen when you see two dots.",
                                url: "game4"
                            }) 
                        }
                    >
                    </TouchableOpacity>
                    <Text style={styles.text}>
                        Mini Game 4
                    </Text>
                </View>      
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    bigContainer:{
        flex:1,
        paddingVertical:'5%',
        paddingHorizontal:'20%',
        flexDirection:'column',
        justifyContent:'space-between'
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    sqare:{
        height:100,
        width:100,
        backgroundColor:'blue'
    },
    text:{
        fontSize:18,
        marginTop:2
    }
})

export default LandingPage;