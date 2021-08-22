import React from 'react';

import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

function ImageOptions({ icon, size, color = "black", background = "white", style }) {
    return (
        <View>
            <TouchableOpacity>
                <View style={[styles.container, style, { height: size * 1.5, width: size * 1.5, backgroundColor: background, borderRadius: size }]}>
                    <MaterialCommunityIcons name={icon} size={size} color={color} />
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10
    }
})

export default ImageOptions;