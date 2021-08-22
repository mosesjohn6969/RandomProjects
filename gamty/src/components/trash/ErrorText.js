import React from 'react';

import { StyleSheet, View, Text } from 'react-native';

function ErrorText({ children }) {
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
        color: "red",
        alignItems: "flex-end"
    },
    error: {
        color: "red",
        fontSize: 13,
        paddingRight: 3
    }
})

export default ErrorText;