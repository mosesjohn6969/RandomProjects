import React from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function AppButton2({ text, height = 50, backgroundColor = "#FFFFFF", borderColor = "#00286B", borderRadius = 25, marginVertical = 5, style, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.container, { height, backgroundColor, borderColor, borderRadius, marginVertical }]}>
                <Text style={[styles.text, style, { color: borderColor }]}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2
    },
    text: {
        color: "white",
        fontSize: 18,

    }
})

export default AppButton2;