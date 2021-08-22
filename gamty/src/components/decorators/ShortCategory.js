import React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ShortCategory({ icon, size = 25, text, style }) {
    return (
        // <View style={{ flexGrow: 1 }}>
        <View style={[styles.container, style]}>
            <View>
                <MaterialCommunityIcons name={icon} size={size} />
            </View>
            <View style={{ flexWrap: "wrap" }}>
                <Text numberOfLines={1}>{text}</Text>
            </View>
        </View>
        // </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // width: "100%",
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden",
        // flexWrap: "wrap",
        flexShrink: 1
    }
})

export default ShortCategory;