import React from 'react';

import { StyleSheet, Text, TextInput, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Tooltip } from 'react-native-elements';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function TextField({ style, size = 50, borderRadius = 10, backgroundColor = "#F6F6F6", marginVertical = 5, icon, title, empty, onPress, ...otherProps }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View
                style={[styles.container,
                { height: size, borderRadius, marginVertical, backgroundColor: backgroundColor }]}>

                {/* Displaying an icon only when one is passed*/}
                <View style={styles.icon}>
                    {icon && <MaterialCommunityIcons name={icon} size={size / 2} color="#788190" />}
                </View >

                {/* The Text Input */}

                <TextInput style={[styles.TextField, { fontSize: (size / 3) }, style]} {...otherProps} />

            </View>
            {/* Covering the whole screen so all parts are touchable screen when an on press event is passed in */}
            {onPress &&
                <View style={{ position: 'absolute', top: 3, width: "100%", height: "100%", backgroundColor: "transparent" }}></View>
            }
        </TouchableWithoutFeedback>
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
        borderColor: "lightgrey",
        borderWidth: 0.4,

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