import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors'

function CustomButton({ title, baColor, onPress, borderRadius, style, }) {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: baColor, borderRadius: borderRadius ? borderRadius : 25 }]} onPress={onPress}>
            <View>
                <Text style={[styles.text, style]}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: "100%",
        marginVertical: 5
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold"
    }
})

export default CustomButton;