import React from 'react';

import { StyleSheet, Text, TextInput, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Tooltip } from 'react-native-elements';

function TextField({ size = 50, width = "100%", borderRadius = 10, backgroundColor = "#F6F6F6", error, marginTop = 5, icon, title, ...otherProps }) {
    return (
        <View style={{ marginTop }}>
            {title &&
                <View style={{ paddingBottom: 10 }}>
                    <Text style={{ color: "#27214D", fontSize: 17, fontWeight: "900" }}>{title}</Text>
                </View>
            }
            <View
                // changing background color to #FCD4D4 if error
                style={[styles.container,
                { height: size, borderRadius, backgroundColor: error ? "#FCD4D4" : backgroundColor }]}>

                {/* Displaying an icon only when one is passed*/}
                <View style={styles.icon}>
                    {icon && <MaterialCommunityIcons name={icon} size={size / 2} color="#788190" />}
                </View >

                {/* The Text Input */}
                <TextInput style={[styles.TextField, { fontSize: (size / 3) }]} {...otherProps} />

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