import React from 'react';

import { StyleSheet, Text, TextInput, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

function TextField({ size = 50, borderRadius = 10, backgroundColor = "#F5F9FF", marginVertical = 5, icon, ...otherProps }) {
    return (
        <View
            style={[styles.container,
            { height: size, borderRadius, backgroundColor, marginVertical }]}>

            {/* Displaying an icon only when one is passed*/}
            <View style={styles.icon}>
                {icon && <MaterialCommunityIcons name={icon} size={size / 2} color="#788190" />}
            </View >
            {/* <View> */}
            <TextInput style={[styles.TextField, { fontSize: (size / 3) }]} {...otherProps} />
            {/* </View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "red",
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden",
        paddingHorizontal: 5,
    },
    TextField: {
        flex: 1,
        height: "100%",
        paddingRight: 5
    },
    icon: {
        paddingLeft: 3,
        paddingRight: 8
    }
})

export default TextField;