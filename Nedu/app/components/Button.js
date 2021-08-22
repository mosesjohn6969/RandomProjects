
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from 'react-native-elements';


function Button({ text, height = 50, backgroundColor,borderColor, borderWidth, borderRadius = 10,  marginHorizontal, onPress, fontSize =16, color=colors.white , paddingHorizontal, paddingVertical}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.container, { height, backgroundColor, borderRadius,  marginHorizontal, paddingHorizontal,paddingVertical, borderColor, borderWidth }]}>
                <Text style={{fontSize:fontSize, color:color}}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}



const styles = StyleSheet.create({
    container : {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",       
    },
    
})
export default Button;







