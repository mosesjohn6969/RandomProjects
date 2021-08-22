import React from 'react';
import { View, StyleSheet,TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from '../config/colors';

function HomeButton({onPress}) {
    return (
        <TouchableOpacity onPress = {onPress} >
        
            <View style = {styles.container}>
                <MaterialCommunityIcons 
                    name="home-outline" 
                    color= {colors.white}
                    size={25}/>
            </View>
        
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container : {
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderRadius: 10,
        justifyContent:'center',
        width: 40,
        height: 40,
        top:10
    }
})
export default HomeButton;

