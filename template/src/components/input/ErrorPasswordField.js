import React, { useState } from 'react';

import { StyleSheet, TextInput, TouchableWithoutFeedback, View, Text } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Tooltip } from 'react-native-elements/dist/tooltip/Tooltip';
import appcolors from '../../config/appcolors';

function PasswordField({ title, size = 50, borderRadius = 10, backgroundColor = "#F6F6F6", error, marginTop = 5, icon, ...otherProps }) {
    // to control password show and hide
    const [passwordStatus, setPasswordStatus] = useState(true);

    return (
        <View style={{ marginTop }}>
            {title &&
                <View style={{ paddingBottom: 10 }}>
                    <Text style={{ color: "#27214D", fontSize: 17, fontWeight: "900" }}>{title}</Text>
                </View>
            }
            <View
                style={[styles.container,
                { height: size, borderRadius, backgroundColor: error ? "#FCD4D4" : backgroundColor }]}>

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
                            <Text style={styles.showhide}>Show</Text>
                        </TouchableWithoutFeedback>
                    }

                    {(passwordStatus == false) &&
                        <TouchableWithoutFeedback onPress={() => setPasswordStatus(true)}>
                            <Text style={styles.showhide}>Hide</Text>
                        </TouchableWithoutFeedback>
                    }
                </View >

                {/* The Error Icon */}
                {error &&
                    <Tooltip
                        backgroundColor="#FCD4D4"
                        withOverlay={true}
                        height={size}
                        width={size * 4}
                        popover={<Text>{error}</Text>}>
                        <MaterialCommunityIcons style={styles.icon} name="alert-circle-outline" size={size / 1.8} color="#D53930" />
                    </Tooltip>
                }
            </View>
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
    },
    showhide: {
        fontSize: 18,
        color: appcolors.primary
    }
})

export default PasswordField;