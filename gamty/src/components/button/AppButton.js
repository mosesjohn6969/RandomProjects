import React from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import appcolors from '../../config/appcolors';

function AppButton({ toggle, text, height = 50, borderRadius = 25, marginBottom = 5, style, onPress }) {
    return (
        <View>
            {!toggle ?

                <TouchableOpacity onPress={onPress}>
                    <View style={[styles.container, { height, backgroundColor: appcolors.primary, borderRadius, marginBottom }]}>
                        <Text style={[styles.text, style, { color: appcolors.secondary }]}>{text}</Text>
                    </View>
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={onPress}>
                    <View style={[styles.container, { height, backgroundColor: appcolors.secondary, borderColor: appcolors.primary, borderRadius, marginBottom, borderWidth: 2 }]}>
                        <Text style={[styles.text, style, { color: appcolors.primary }]}>{text}</Text>
                    </View>
                </TouchableOpacity>

            }
        </View>
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
        fontWeight: "bold"
    }
})

export default AppButton;