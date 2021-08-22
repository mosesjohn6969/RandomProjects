import React from 'react';
import { Text } from 'react-native';

import { StyleSheet, View, TextInput } from 'react-native';
import { Tooltip } from 'react-native-elements/dist/tooltip/Tooltip';
import customStyles from '../../config/customStyles';

import { MaterialCommunityIcons } from '@expo/vector-icons';

function InputField({ size = 40, title, marginVertical = 10, error, ...otherProps }) {
    return (
        <View style={{ marginVertical }}>
            {title &&
                <View>
                    <Text style={styles.Title}>{title}</Text>
                </View>
            }
            <View style={[styles.container, { height: size, borderBottomColor: error ? "#D53930" : "#343F55" }]}>
                <TextInput style={[styles.TextInput, customStyles.TextInput, { fontSize: (size / 2) }]} {...otherProps} />

                {/* The Error Icon */}
                {error &&
                    <Tooltip
                        backgroundColor="#FCD4D4"
                        withOverlay={true}
                        height={size * 2}
                        width={size * 5}
                        popover={<Text>{error}</Text>}>
                        <MaterialCommunityIcons style={styles.icon} name="alert-circle-outline" size={size / 1.5} color="#D53930" />
                    </Tooltip>
                }
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
    },
    icon: {
        paddingLeft: 3,
        paddingRight: 8
    }
})

export default InputField;