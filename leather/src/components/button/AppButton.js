import React from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function AppButton({ text, height = 50, width = "100%", backgroundColor = "#343F55", borderRadius = 25, marginVertical = 5, style, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.container, { height, width, backgroundColor, borderRadius, marginVertical }]}>
                <Text style={[styles.text, style]}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    }
})

export default AppButton;