import React from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import appcolors from '../../config/appcolors';

function AppButton({ text, height = 50, backgroundColor = appcolors.primary, borderRadius = 15, marginVertical = 5, style, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.container, { height, backgroundColor, borderRadius, marginVertical }]}>
                <Text style={[styles.text, { color: appcolors.secondary }, style]}>{text}</Text>
            </View>
        </TouchableOpacity >
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 16,
        // fontWeight: "bold",

    }
})

export default AppButton;