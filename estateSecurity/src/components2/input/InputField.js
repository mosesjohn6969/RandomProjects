import React from 'react';
import { Text } from 'react-native';

import { StyleSheet, View, TextInput } from 'react-native';
import customStyles from '../../config/customStyles';

function InputField({ size = 40, title, marginVertical = 10, ...otherProps }) {
    return (
        <View style={{ marginVertical }}>
            {title &&
                <View>
                    <Text style={styles.Title}>{title}</Text>
                </View>
            }
            <View style={[styles.container, { height: size }]}>
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

export default InputField;