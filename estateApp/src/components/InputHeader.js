import React from 'react';

import { StyleSheet, View, Text } from 'react-native';

function InputHeader({ children, title, req }) {
    return (
        <View style={styles.container}>
            <Text style={styles.error}>
                {children}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        color: "black",
        alignItems: "flex-start"
    },
    error: {
        color: "black",
        fontSize: 14,
        paddingLeft: 5,
    }
})

export default InputHeader;