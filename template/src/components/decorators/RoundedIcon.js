import React from 'react';

import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function RoundedIcon({ size = 25, name, color = "#FFFFFF", backgroundColor = "#4CD964" }) {
    return (
        <View style={[styles.container, { backgroundColor, width: (size), height: (size), borderRadius: (size) }]}>
            <MaterialCommunityIcons name={name} size={(size / 1.2)} color={color} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center"
    }
})

export default RoundedIcon;