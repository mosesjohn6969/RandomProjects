import React from 'react';
import { Text } from 'react-native';

import { StyleSheet, View } from 'react-native';

function TextBox({ height = 50, backgroundColor = "#99b7c9", borderColor = "#343F55", children, style, ...otherProps }) {
    return (
        <View style={[styles.container, { height, backgroundColor, borderColor, ...otherProps }]}>
            <Text style={[styles.Text, style]}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        // opacity: 0.2,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderRadius: 5
    },
    Text: {
        color: "black",
        fontSize: 15
    }
})

export default TextBox;