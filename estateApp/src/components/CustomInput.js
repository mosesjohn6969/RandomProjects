import React from 'react';
import { View, StyleSheet, TextInput, Platform, Text } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import colors from '../config/colors';

// reusing styles
import customStyles from '../config/customStyles';
import ErrorText from './ErrorText';
import InputHeader from './InputHeader';

function CustomInput({ icon, size, iconcolor, style, width, borderRadius = 15, color, error, empty, ...otherProps }) {
    return (

        <View style={{ flexDirection: "column" }}>
            {/* Displaying an error message on top if any */}
            <View style={{ height: 15 }}>
                {error && <ErrorText>{error}</ErrorText>}
            </View>
            {/* The input section */}
            <View
                style={[styles.container,
                { width: width, padding: (size / 4), borderRadius: borderRadius, backgroundColor: color, borderColor: error ? "red" : colors.light }]} >

                {/* Displaying an icon only when one is passed*/}
                < View style={styles.iconContainer} >
                    {icon && <MaterialCommunityIcons name={icon} size={size / 2} color={iconcolor} />
                    }
                </View >
                {/* The Text */}
                {empty ? (
                    <Text style={[customStyles.text, styles.text, { fontSize: (size / 3), color: colors.medium }, style]}>{empty}</Text>
                ) : (
                    <TextInput style={[customStyles.text, styles.text, { fontSize: (size / 3) }, style]} {...otherProps} />
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        marginVertical: 5,
        borderWidth: 1,
        borderColor: colors.light
    },
    iconContainer: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 5,
        marginRight: 3
    },
    text: {
        flex: 1,
        height: "100%"
    }
})

export default CustomInput;