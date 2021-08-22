import React from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

function Statistics({ title, number, icon, iconSize, style, iconColor, onPress }) {
    return (

        <View style={[styles.container, style]}>
            <TouchableOpacity onPress={onPress}>
                <View style={{ alignItems: "flex-end", }}>
                    {/* Number Section */}
                    <Text style={{
                        width: iconSize / 1.8,
                        height: iconSize / 1.8,
                        backgroundColor: iconColor,
                        borderRadius: 20,
                        textAlign: "center",
                        textAlignVertical: "center",
                        marginRight: iconSize / 2,
                        overflow: "hidden",
                        color: "white"
                    }}>
                        {number}
                    </Text>
                </View>
                <View style={{ alignItems: "center" }}>
                    <MaterialCommunityIcons name={icon} size={iconSize} color={iconColor} />
                    <Text style={{ color: "black", fontWeight: "bold" }}>{title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        flexGrow: 1,
        // backgroundColor: colors.medium
    },
    number: {
        padding: 3,
    }
})

export default Statistics;