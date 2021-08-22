import React from 'react';
import { Text } from 'react-native';

import { StyleSheet, View, TextInput } from 'react-native';
import customStyles from '../../config/customStyles';

import { MaterialCommunityIcons } from '@expo/vector-icons';

function TextField({ icon, size = 40, title, marginVertical = 10, ...otherProps }) {
    return (
        <View style={{ marginVertical }}>
            {title &&
                <View>
                    <Text style={styles.Title}>{title}</Text>
                </View>
            }
            <View style={[styles.container, { height: size }]}>
                {/* Displaying an icon only when one is passed*/}
                <View style={styles.icon}>
                    {icon && <MaterialCommunityIcons name={icon} size={size / 2} color="#788190" />}
                </View >

                {/* The Input */}
                <TextInput style={[styles.TextInput, customStyles.TextInput, { fontSize: (size / 2) }]} {...otherProps} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        // backgroundColor: "blue",
        borderBottomWidth: 0.5,
        borderBottomColor: "#343F55",
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 5
    },
    TextInput: {
        flex: 1,
        color: "#343F55",
        height: "100%",
        fontWeight: "600"
    },
    Title: {
        fontSize: 18,
        fontWeight: "400",
        color: "#000000",
        opacity: 0.4,
        fontFamily: "Montserrat-Black"
    }
})

export default TextField;