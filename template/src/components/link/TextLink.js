import React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function TextLink({ children, onPress, style }) {
    return (
        <View style={{ flexGrow: 1 }}>
            <TouchableOpacity onPress={onPress}>
                <Text style={[styles.Text, style]}>{children}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    Text: {
        color: "#27214D",
        fontSize: 16,
        textAlign: "center"
    }
})

export default TextLink;