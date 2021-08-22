import React from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function AppButton({ text, height = 50, backgroundColor = "#00286B", borderRadius = 25, marginVertical = 5, style, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.container, { height, backgroundColor, borderRadius, marginVertical }]}>
                <Text style={[styles.text, style]}>{text}</Text>
            </View>
        </TouchableOpacity>
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
        fontSize: 18,
    }
})

export default AppButton;