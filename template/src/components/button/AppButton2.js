import React from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import appcolors from '../../config/appcolors';

function AppButton2({ text, height = 50, backgroundColor = appcolors.secondary, borderColor = appcolors.primary, borderRadius = 10, marginVertical = 5, paddingHorizontal = 20, style, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.container, { height, backgroundColor, borderColor, borderRadius, marginVertical, paddingHorizontal }]}>
                <Text style={[styles.text, style, { color: borderColor }]}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        paddingHorizontal: 20
    },
    text: {
        color: "white",
        fontSize: 15,

    }
})

export default AppButton2;