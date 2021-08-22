import React, { useState } from 'react';

import { StyleSheet, TextInput, TouchableWithoutFeedback, View, Text } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Tooltip } from 'react-native-elements/dist/tooltip/Tooltip';

function PasswordField({ size = 50, borderRadius = 10, backgroundColor = "#F5F9FF", marginVertical = 5, icon, ...otherProps }) {
    // to control password show and hide
    const [passwordStatus, setPasswordStatus] = useState(true);

    return (
        <View
            style={[styles.container,
            { height: size, borderRadius, backgroundColor, marginVertical }]}>

            {/* Displaying an icon only when one is passed*/}
            <View style={styles.icon}>
                {icon && <MaterialCommunityIcons name={icon} size={size / 2} color="#788190" />}
            </View >

            {/* The Input Section */}
            <TextInput style={[styles.TextField, { fontSize: (size / 3) }]} secureTextEntry={passwordStatus} {...otherProps} />

            {/* Controlling Password show and hide */}
            <View style={styles.icon}>
                {(passwordStatus == true) &&
                    <TouchableWithoutFeedback onPress={() => setPasswordStatus(false)}>
                        <MaterialCommunityIcons name="eye-outline" size={size / 1.6} color="#788190" />
                    </TouchableWithoutFeedback>
                }

                {(passwordStatus == false) &&
                    <TouchableWithoutFeedback onPress={() => setPasswordStatus(true)}>
                        <MaterialCommunityIcons name="eye-off-outline" size={size / 1.6} color="#788190" />
                    </TouchableWithoutFeedback>
                }
            </View >
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

export default PasswordField;